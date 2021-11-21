# Contact Congress
Contact Congress was built for queer_hack 2021. 

## Inspiration

It is important for constituents to not only know who their congressional representatives are, but also have an easy way to contact them. We made Contact Congress to make it easy and fast to learn about and contact the House of Representatives member for any district in the United States.

## What it does

Contact Congress is a web app (currently hosted locally) that has an interactive map of all congressional districts in the United States. Right clicking on any district will trigger a popup that contains the name of the district, the name and party of the House of Representatives member for that district, a hyperlink to their website, and their phone number.

## How we built it

We used JavaScript, React, HTML, and CSS to build Contact Congress. The interactive map is powered by Leaflet, GIS data from the US Census Bureau, and the Google Civic Information API. 

## Challenges We Solved

Some of the challenges we encountered along the way included Google API’s query limit and Leaflet’s strict HTML requirement for their popups.

To solve the rate limit, we wrote our Popups such that they would only query Google’s Civic Information API if the Popup did not exist yet. After the query, the Popup would be created with the data we needed and then bound the districts they are associated with. Thus, if someone using our website clicked on the same district more than once, there would not be a second API call because the Popup with the data already exists.

To solve rendering React Components, there is a class called ReactDOMServer which can pre-transpile (translate React JSX into its respective HTML and JS) and pass the HTML string to the Popup. Thus, we can render more complex Popup data like the links to the representatives’ sites and the phone icon.

## What we learned
Our team came with different experiences levels (including a first-time hacker!) and learned a lot about building a web app. We learned how to integrate shapefiles into an interactive map and how to make API calls. We were able to sharpen our JavaScript, HTML, and CSS skills and we worked with React (for the first time, for some of us) to create this cool application.

## What's next for Contact Congress

The foundation of the interactive map for Contact Congress is really important to our future vision which makes it easier for United States residents to get involved in the political process. Putting constituents in contact with representatives is a good first step, but our interactive map will make showing data on gerrymandering, election results, legislation votes, and other topics more accessible to everyone.

# Running Locally
You will not be able to run our code locally because we have kept the API key secret.
