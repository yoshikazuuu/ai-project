from django.shortcuts import render

# Example in yourapp/views.py
from django.http import JsonResponse
from .models import BertModelService


def process_text(request):
    if request.method == "POST":
        text = request.POST.get("text")
        trained = request.POST.get("trained")
        bert_model = BertModelService()
        result = bert_model.process_text(text, trained)
        return JsonResponse(
            {
                "text": result["text"],
                "sentiment": result["sentiment"],
                "confidence": result["confidence"],
            }
        )
    else:
        return JsonResponse({"error": "Invalid request method"})
