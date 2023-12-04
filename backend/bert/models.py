from django.db import models

# Example in yourapp/models.py
from transformers import BertTokenizer, BertConfig, BertForSequenceClassification
from dotenv import load_dotenv
import torch.nn.functional as F
import torch
import os

load_dotenv()


class BertModelService:
    def __init__(self):
        MODEL = os.getenv("BERT_MODEL_TWEET")
        print(MODEL)
        self.tokenizer = BertTokenizer.from_pretrained(MODEL)
        self.config = BertConfig.from_pretrained(MODEL)
        self.config.num_labels = 5
        self.model = BertForSequenceClassification.from_pretrained(
            MODEL, config=self.config
        )

    def process_text(self, text):
        inputs = self.tokenizer(text, return_tensors="pt")
        outputs = self.model(**inputs)

        subwords = self.tokenizer.encode(text)
        subwords = torch.LongTensor(subwords).view(1, -1).to(self.model.device)

        logits = self.model(subwords)[0]
        label = torch.topk(logits, k=1, dim=-1)[1].squeeze().item()
        confidence = F.softmax(logits, dim=-1).squeeze()[label] * 100
        label_name = {0: "sadness", 1: "anger", 2: "love", 3: "fear", 4: "happy"}[label]

        confidence_acc = confidence.item()

        print(f"text: {text} | Label: {label_name} | Confidence: {confidence_acc}")

        result_dict = {
            "text": text,
            "sentiment": label_name,
            "confidence": confidence_acc,
        }

        return result_dict
