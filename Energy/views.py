from django.shortcuts import render  # Import the render function to render HTML templates
from django.http import HttpResponse  # Import HttpResponse (not used in this function but useful for returning text responses)

# View function for the Energy page
def serviceEnergy(request):
    return render(request, "energy.html")  # Renders the 'energy.html' template when the 'energy/' URL is accessed.
