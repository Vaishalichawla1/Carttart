# Import the render function from django.shortcuts to render templates
from django.shortcuts import render

# Define the sports view function
def serviceSports(request):
  return render(request, '../templates/sports.html')   # Renders the sports.html template when the 'sports/' URL is accessed.