# Import the render function from django.shortcuts to render templates
from django.shortcuts import render

# Define the tours view function
def serviceTours(request):
  return render(request, '../templates/tours.html')   # Renders the tours.html template when the 'tours/' URL is accessed.