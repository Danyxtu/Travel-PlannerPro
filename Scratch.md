<!-- Objectives:
  Routes: /destinations (list with ?q=&region=), /destinations/:id (details), /destinations/:id/itinerary (nested), /favorites (props: defaultView=grid/list), /about.
  Filter destinations by region and search query via query params.
  Itinerary builder supports deep linking via ?day=1,2,...
  Favorites page styled differently depending on props.
  Use useNavigate to redirect after adding to favorites. -->

Itinerary - travel plan or schedule set by the user


  # System Flow - Destinations > (Specific Destination > Specific Destination with Itinerary) > Favorites > About 

# '/home' or '/'(optional) - Welcome Message
# '/destinations/?q=&region=defualt' or '/' - Grid Display of cities and can be filtered by region and search via query params
# '/favorite/?q=&region=default' - Grid display of added favorite cities can also be filtered by regions and search via query params
# '/about' - Description about the app
# '/destination/:id' - details of the city
# '/destination/:id/itinerary' - travel plan of that specific destination

# Static Data for Cities within the region
# Static Data + Dynamic Data for the Itinerary