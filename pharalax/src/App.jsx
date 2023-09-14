import React from 'react'
import './App.css'
import earth from './assets/Earth.png'
// import moon from './assets/moon.jpg'
// import trees from './assets/Trees.png'
// import mountain from './assets/Mountain.png'
import moon from './assets/MOON.png'
import space from './assets/SPACE.png'

function Header(){
return(
  <div className='page'>
  <div className='wrapper'>
  <header>
  <img src={space} alt='mountain' className='background'/>
  <img src={earth} alt="trees" className='foreground' />
  <h1 className='title'>WELCOME!!!</h1>
  </header>
  <section>Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Enim quas rem voluptatem deserunt sunt eius illo provident, impedit excepturi odio
      mollitia, minima nisi fuga ex esse facilis cumque obcaecati autem quod qui ut amet. 
      Quaerat quisquam ratione, perspiciatis fugit id quae tenetur, sequi praesentium ab 
      animi deserunt error a rem neque voluptas accusantium voluptatibus! Quibusdam neque 
      totam rerum natus autem consequuntur, recusandae quisquam dolorum possimus dolorem at 
      minus dolore placeat perferendis expedita repudiandae molestias nesciunt suscipit illum 
      quos ut beatae ipsam. Illum nulla inventore culpa beatae reiciendis necessitatibus in 
      itaque modi odit a eaque maiores saepe id eius aliquid cumque libero, cupiditate ex soluta veritatis sit porro? Dolore et sed voluptatibus tenetur reiciendis odio neque, 
      velit animi laboriosam asperiores similique sit repellendus quaerat beatae tempore 
      ullam est minus iste quibusdam facere itaque aspernatur corporis dolorem? Laudantium
       nihil ratione debitis dignissimos accusamus, voluptatum est nulla quas nemo voluptates 
       illo aliquam pariatur veritatis deserunt quaerat eos fuga sequi. Ex, non reiciendis 
       repellat modi, voluptate distinctio dolor accusantium, magnam praesentium impedit excepturi fuga alias! Voluptatibus corrupti beatae reprehenderit doloribus ipsum sapiente ut, velit ab placeat et laborum dolorem inventore facilis nulla voluptatum doloremque deleniti quos magnam quibusdam! Et in provident accusamus quis! Perferendis quas eius accusamus cumque architecto sed reprehenderit quis tenetur! Sequi fugiat saepe suscipit beatae at totam ut? Enim deserunt corrupti maxime laboriosam quam soluta minima harum provident, doloremque cumque eaque officiis, omnis, architecto molestiae. Aut odit vel dolor quibusdam dignissimos error quae possimus, explicabo libero quidem laboriosam, repellat corrupti reprehenderit blanditiis excepturi cupiditate, sequi provident adipisci consectetur! Magni sint, impedit eius dicta a saepe sed soluta quisquam accusamus. Dicta facere repudiandae inventore enim nam dolorum amet ipsa consequuntur ad recusandae distinctio, laboriosam voluptatibus aspernatur laudantium illum similique. Assumenda nesciunt porro praesentium quod eum delectus, neque quam corporis molestiae distinctio deserunt.</section>
  </div>
  </div>
)
}

function App() {


  return (
   <div>

    <Header></Header>

   </div>
  )
}

export default App
