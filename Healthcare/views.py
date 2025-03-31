# Import the render function from django.shortcuts to render templates
from django.shortcuts import render

# This function handles requests to the 'healthcare/' URL and renders the healthcare.html template.
# Define the healthcare view function
def serviceHealthcare(request):
  return render(request, '../templates/healthcare.html') # Renders the healthcare.html template when the 'healthcare/' URL is accessed.