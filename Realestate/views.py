# Import the render function from django.shortcuts to render templates
from django.shortcuts import render

# Define the realstate view function
def serviceRealestate(request):
  return render(request, "../templates/realestate.html") # Renders the realestate.html template when the 'realestate/' URL is accessed.