"# WeatherApplication" 
 The API https://www.metaweather.com/api/ we are using does not support Cross Origin Resource Sharing (CORS).
 
 Note: If you are developing RESTFul webservice producing JSON as a response that may be consumed by clients, you need to aware of the same-origin policy. The same-origin policy is the important security concept implemented by browser to prevent javascript codes from sending request to different source. The same-origin policy not only prevent from sending request to different origin but also prevent from sending request to different port and different protocols.

1. To enable CORS we have to follow below steps:
    a. Download CORS (Allow-Control-Allow-Origin: *) Chrome extension (https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en)  
    b. Enable CORS
    
2.	Download and install Node JS in local machine
3.	run http server 
    a.	go to command prompt
    b.	go to project location
    c.	execute http-server

