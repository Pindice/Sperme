from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient

# Create your tests here.
class ImageClassificationViewTest(TestCase):
    def setUp(self):
        # Créez un client de test pour effectuer des requêtes HTTP simulées
        self.client = APIClient()

    def test_classification_with_valid_image(self):
        # Chargez une image valide à partir d'un fichier de test ou générez-la dynamiquement
        image_file = open(r'C:\Users\p.indice\HuSHem\01_Normal\image_001.BMP', 'rb')

        # Endpoint URL de l'API de classification d'images
        url = reverse('image-classification')

        # Effectuez une requête POST avec l'image comme données multipart/form-data
        response = self.client.post(url, {'image': image_file}, format='multipart')

        # Vérifiez que la réponse est 200 OK
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        # Vérifiez que la réponse contient les scores de prédictions
        self.assertIn('Pyriform', response.data)
        self.assertIn('Tapered', response.data)
        self.assertIn('Amorphous', response.data)
        self.assertIn('Normal', response.data)

    def test_classification_with_missing_image(self):
        # Endpoint URL de l'API de classification d'images
        url = reverse('image-classification')

        # Effectuez une requête POST sans inclure l'image
        response = self.client.post(url)

        # Vérifiez que la réponse est 400 Bad Request
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
