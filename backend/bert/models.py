from django.db import models

# Example in yourapp/models.py
from transformers import (
    BertTokenizer,
    BertConfig,
    BertForSequenceClassification,
    logging,
)
from dotenv import load_dotenv
import torch.nn.functional as F
import torch
import os

logging.set_verbosity_error()
load_dotenv()


class BertModelService:
    def __init__(self):
        MODEL = os.getenv("BERT_MODEL_BASE")
        print(MODEL)
        self.tokenizer = BertTokenizer.from_pretrained(MODEL)
        self.config = BertConfig.from_pretrained(MODEL)
        self.config.num_labels = 5
        self.model = BertForSequenceClassification.from_pretrained(
            MODEL, config=self.config
        )

    def process_text(self, text, trained):
        if trained == "true":
            state_dict = torch.load(
                "./bert/model/emot_fine_tuned.pth", map_location=torch.device("cpu")
            )
            self.model.load_state_dict(state_dict)

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
