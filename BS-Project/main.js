import AOS from 'aos';
import 'aos/dist/aos.css'; 
import "./node_modules/waypoints/lib/noframework.waypoints";



AOS.init();

const navbar = document.querySelector("#myNavbar")
const about = document.querySelector("#about");


var waypoints = new Waypoint({
    element: about,
    handler: function() {
        navbar.classList.replace("bg-transparent","bg-secondary");
      }
  })

