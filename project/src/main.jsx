import cat1 from "./components/download (4).jpg"
import cat2 from "./components/download (9).jpg"
import cat3 from "./components/download (8).jpg"
import cat4 from "./components/download (11).jpg"

import {createRoot} from "react-dom/client"
import Card from "./components/Card"

const Root=createRoot(document.getElementById("root"))

Root.render(
  <div className="contacts">
     <Card
       img={cat1}
       name="Mr.Whilkerson"
       phone="(+92)3465521"
        email="mr.whika@catnap.meow"
       />
     <Card
       img={cat2}
       name="Mr.fluffy"
       phone="(+92)34155241"
       email="mr.flffy@catnap.meow"
       />

     <Card
     img={cat3}
     name="Mr.hush hush"
     phone="(+92)34255234"
     email="mr.hush@catnap.meow"
     
      />

     <Card
     img={cat4}
     name="Mr.gosh gosh"
     phone="(+92)32144632"
     email="mr.gosh@catnap.meow"
    
     />
  </div>
  
)