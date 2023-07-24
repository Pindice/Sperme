from django.shortcuts import render
import requests
from rest_framework.response import Response
from rest_framework.views import APIView

# Create your views here.

class ImageClassificationView(APIView):
    def post(self, request):
        # Assurez-vous que l'image est incluse dans la requête POST
        image = request.FILES.get('image')
        if not image:
            return Response({'error': 'Veuillez inclure une image.'}, status=400)

        # Remplacez 'VOTRE_CLE_API' et 'VOTRE_POINT_TERMINAISON' par les valeurs réelles
        api_key = '99c74b3f558147ad9f0779d3bccca0ab'
        endpoint = 'https://sperm-prediction.cognitiveservices.azure.com/customvision/v3.0/Prediction/9b6a32d1-5ac7-4af0-a288-1372676f418d/classify/iterations/Iteration1/image'

        # Envoyez la requête pour la classification de l'image à l'API de Microsoft Azure Custom Vision
        headers = {
            'Prediction-Key': api_key,
            'Content-Type': 'application/octet-stream'
        }
        data = image.read()
        response = requests.post(endpoint, headers=headers, data=data)

        # Traitez la réponse et renvoyez les scores de prédictions
        if response.status_code == 200:
            predictions = response.json()['predictions']
            scores = {prediction['tagName']: prediction['probability'] for prediction in predictions}
            return Response(scores, status=200)
        else:
            return Response({'error': 'Erreur lors de la classification de l\'image.'}, status=500)