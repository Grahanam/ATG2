gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Observer);

let scrolldiv=document.querySelector('.playground')
let maindiv=document.querySelector('#main')
let sections=document.querySelectorAll('section')
let transring=document.querySelector('#transring')
let upperheading=document.querySelector('#upperheading p')
let mainheading=document.querySelector('#mainheading p')
let bottomheading=document.querySelector('#bottomheading p')

let sideupperheading=document.querySelector('#sideupperheading p')
let sidemainheading=document.querySelector('#sidemainheading p')
let sidebottomheading=document.querySelector('#sidebottomheading p')



const transparentRingLength = document.querySelector('#Transparent_Ring').getTotalLength();
const opaqueRingLength = document.querySelector('#Opaque_Ring').getTotalLength();

gsap.set('#Opaque_Ring', { strokeDasharray: opaqueRingLength, strokeDashoffset: opaqueRingLength });

let dotindex=[
    '#dot1',
    '#dot2',
    '#dot3',
    '#dot4',
    '#dot5',
    '#dot6',
    '#dot7'
]

let headingcontent=[
  ["","25M+ Downloads","on appstore & google playstore"],
  ["The Next Big","Blockchain","Revolution"],
  ["Powered by advance","","algorithm"],
  ["Redefining","UX Strategy","and UI design"],
  ["Text Headline","Text Headline","Footer headline"],
  ["Developing ERP solution for","Text Headline","in furniture industry"],
  ["Biggest Classifieds","East Asia","Countries"]
]

let sideheadingcontent=[
  ["ABC 12345","we are the best web development company in the world","coming soon"],
  ["ABC 12346","we are the best web development company in the world","coming soon"],
  ["ABC 12345","we are the best web development company in the world","coming soon"],
  ["ABC 12345","we are the best web development company in the world","coming soon"],
  ["ABC 12345","we are the best web development company in the world","coming soon"],
  ["ABC 12345","we are the best web development company in the world","coming soon"],
  ["ABC 12345","we are the best web development company in the world","coming soon"],
]

function removedotinfront(index){
    for(let i=index;i<7;i++){
        gsap.to(dotindex[i],{ opacity: 0, duration: 0.5 })
    }
}

function adddotbackward(index){
  for(let i=index;i>=0;i--){
      gsap.to(dotindex[i],{ opacity: 1, duration: 0.5 })
  }
}

function setheadingcontent(i){
    upperheading.textContent=headingcontent[i][0]
    mainheading.textContent=headingcontent[i][1]
    bottomheading.textContent=headingcontent[i][2]
}

function setsideheadingcontent(i){
  sideupperheading.textContent=sideheadingcontent[i][0]
  sidemainheading.textContent=sideheadingcontent[i][1]
  sidebottomheading.textContent=sideheadingcontent[i][2]
}


let colorschema=[
    ['#b22cd4','#d9c5de'],
    ['#4d21ad','#36145c'],
    ['#3c1fcc','#20145c'],
    ['#2a2e30','#15191c'],
    ['#174bad','#09c3e8'],
    ['#131aa8','#131aa8'],
    ['#066132','#08cf68']
]

window.addEventListener("DOMContentLoaded", () => {

    // page 1 animation
    gsap.set(".img1", { y: 630, xPercent: -20 });
    gsap.set(".img2", { y: 630, xPercent: 60 });

    // gsap.timeline();
    const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: "#sec1",
          // markers: true,
          start: "49% center",
          end: "51% center",
          toggleActions: "play reverse restart reverse"
        }
    });

    const t1content = gsap.timeline({
      scrollTrigger: {
        trigger: "#sec1",
        // markers: true,
        start: "49% center",
        end: "51% center",
        toggleActions: "play reverse restart reverse",
      }
    });



    t1.to(".img1", {
      y: 80,
      xPercent: -20,
      duration: 0.3,
      ease: "power4.out",
    }).to(".img2", {
        y: 80,
        xPercent: 60,
        duration: 0.3,
        ease: "power4.out",
      },"-=0.3")


      t1content.fromTo(
        [upperheading, mainheading, bottomheading,sidebottomheading,sideupperheading,sidemainheading,'.logo2'], // Target elements
        { y: 100 }, // Initial values
        { y: 0, xPercent: 0, duration: 0.5, ease: "power4.out" } // Final values
      );

    // Page 2 animation
    gsap.set(".img3", { y: 660, xPercent: -30 });
    gsap.set(".img4", { y: -460, xPercent: 70 });
    // gsap.timeline();
    const t2 = gsap.timeline({
        scrollTrigger: {
          trigger: "#sec2",
          // markers: true,
          start: "49% center",
          end: "51% center",
          toggleActions: "play reverse restart reverse"
        }
    });
    
    const t2content = gsap.timeline({
      scrollTrigger: {
        trigger: "#sec2",
        // markers: true,
        start: "49% center",
        end: "51% center",
        toggleActions: "play reverse restart reverse",
      }
    });

    t2.to(".img3", {
      y: 240,
      xPercent: -30,
      duration: 0.3,
      ease: "power4.out",
    }).to(".img4", {
        y: -160,
        xPercent: 70,
        duration: 0.3,
        ease: "power4.out",
    },"-=0.3")

    t2content.fromTo(
      [upperheading, mainheading, bottomheading,sideupperheading,sidemainheading,sidebottomheading],
      { y: 100 ,xPercent:0},
      { y: 0, xPercent: 0, duration: 0.5, ease: "power4.out" }
    );

    // Page 3 animation
    gsap.set(".img5", { y:660, xPercent: -10 });
    gsap.set(".img6", { y: -460, xPercent: 110 });
    // gsap.timeline();
    const t3 = gsap.timeline({
        scrollTrigger: {
          trigger: "#sec3",
          // markers: true,
          start: "49% center",
          end: "51% center",
          toggleActions: "play reverse restart reverse"
        }
    });

    const t3content = gsap.timeline({
      scrollTrigger: {
        trigger: "#sec3",
        // markers: true,
        start: "49% center",
        end: "51% center",
        toggleActions: "play reverse restart reverse",
      }
    });

    t3.to(".img5", {
      y: 200,
      xPercent: -10,
      duration: 0.3,
      ease: "power4.out",
    }).to(".img6", {
        y: -200,
        xPercent: 110,
        duration: 0.3,
        ease: "power4.out",
    },"-=0.3");
    
    t3content.fromTo(
      [upperheading, bottomheading,'.logo1',sideupperheading,sidemainheading,sidebottomheading],
      { y: 100 ,xPercent:0},
      { y: 0, xPercent: 0, duration: 0.5, ease: "power4.out" }
    )
    
    
    // Page 4 animation
    gsap.set(".img7", { y:660, xPercent: -30 });
    gsap.set(".img8", { y: -380, xPercent: 100 });
    gsap.set(".img9", { y: -220, xPercent: -55 });
    gsap.set(".img10", { y: -190, xPercent: 300 });
    gsap.set(".img11", { y: 600, xPercent: 400 });

    const t4 = gsap.timeline({
        scrollTrigger: {
          trigger: "#sec4",
          // markers: true,
          start: "49% center",
          end: "51% center",
          toggleActions: "play reverse restart reverse"
        }
    });

    const t4content = gsap.timeline({
      scrollTrigger: {
        trigger: "#sec4",
        // markers: true,
        start: "49% center",
        end: "51% center",
        toggleActions: "play reverse restart reverse",
      }
    });


    t4.to(".img7", {
        y: 300,
        xPercent: -30,
        duration: 0.3,
        ease: "power4.out"
      }).to(".img8", {
        y: 150,
        xPercent: 100,
        duration: 0.3,
        ease: "power4.out"
      }, "-=0.3")
    .to(".img9",{
        y:-30,
        xPercent: -55,
        duration: 0.3,
        ease: "power4.out"
      },"-=0.3")
    .to(".img10",{
        y: -110,
        xPercent: 200,
        duration: 0.3,
        ease: "power4.out"
      },"-=0.3")
    .to(".img11",{
        y: 550,
        xPercent: 100,
        duration: 0.3,
        ease: "power4.out"
      },"-=0.3");

      t4content.fromTo(
        [upperheading, mainheading, bottomheading,sideupperheading,sidemainheading,sidebottomheading],
        { y: 100 ,xPercent:0},
        { y: 0, xPercent: 0, duration: 0.5, ease: "power4.out" }
      );

   
    // Page 5 animation
    gsap.set(".img12", { y: -380, xPercent: -100 });
    gsap.set(".img13", { y: -380, xPercent: 10 });
    gsap.set(".img14", { y: 660, xPercent: 120 });
    gsap.set(".img15", { y: 660, xPercent: -100 });
    gsap.set(".img16", { y: 660, xPercent: 10 });

    const t5 = gsap.timeline({
        scrollTrigger: {
          trigger: "#sec5",
          // markers: true,
          start: "49% center",
          end: "51% center",
          toggleActions: "play reverse restart reverse"
        }
    });

    const t5content = gsap.timeline({
      scrollTrigger: {
        trigger: "#sec5",
        // markers: true,
        start: "49% center",
        end: "51% center",
        toggleActions: "play reverse restart reverse",
      }
    });
    
    
    t5.to(".img12", {
        y: -100,
        xPercent: -100,
        duration: 0.3,
        ease: "power4.out"
      }).to(".img13", {
        y: -30,
        xPercent: 10,
        duration: 0.3,
        ease: "power4.out"
      }, "-=0.3")
    .to(".img14",{
        y:140,
        xPercent: 120,
        duration: 0.3,
        ease: "power4.out"
      },"-=0.3")
    .to(".img15",{
        y: 350,
        xPercent: -100,
        duration: 0.3,
        ease: "power4.out"
      },"-=0.3")
    .to(".img16",{
        y: 450,
        xPercent: 10,
        duration: 0.3,
        ease: "power4.out"
    },"-=0.3");

    t5content.fromTo(
      [upperheading, mainheading, bottomheading,sideupperheading,sidemainheading,sidebottomheading],
      { y: 100 ,xPercent:0},
      { y: 0, xPercent: 0, duration: 0.5, ease: "power4.out" }
    );

    // Page 6 animation
    gsap.set(".img17", { y: 550, xPercent: 0 });
    gsap.set(".img20", { y: 660, xPercent: 0 });

    const t6 = gsap.timeline({
        scrollTrigger: {
          trigger: "#sec6",
          // markers: true,
          start: "49% center",
          end: "51% center",
          toggleActions: "play reverse restart reverse"
        }
    });
    
    const t6content = gsap.timeline({
      scrollTrigger: {
        trigger: "#sec6",
        // markers: true,
        start: "49% center",
        end: "51% center",
        toggleActions: "play reverse restart reverse",
      }
    });

    t6.to(".img17", {
        y: 0,
        xPercent: 0,
        duration: 0.3,
        ease: "power4.out"
      }).to(".img20", {
        y: 0,
        xPercent: 0,
        duration: 0.3,
        ease: "power4.out"
      },"-=0.3")

      t6content.fromTo(
        [upperheading, mainheading, bottomheading,sideupperheading,sidemainheading,sidebottomheading],
        { y: 100 ,xPercent:0},
        { y: 0, xPercent: 0, duration: 0.5, ease: "power4.out" }
      );

     // Page 7 animation
     gsap.set(".img18", { y: 660, xPercent: 0 });
     gsap.set(".img19", { y: 660, xPercent: 80 });

     const t7 = gsap.timeline({
         scrollTrigger: {
           trigger: "#sec7",
          //  markers: true,
           start: "49% center",
           end: "51% center",
           toggleActions: "play reverse restart reverse"
         }
     });
     
     const t7content = gsap.timeline({
      scrollTrigger: {
        trigger: "#sec7",
        // markers: true,
        start: "49% center",
        end: "51% center",
        toggleActions: "play reverse restart reverse",
      }
    });

     t7.to(".img18", {
         y: 210,
         xPercent: 0,
         duration: 0.3,
         ease: "power4.out"
       }).to(".img19", {
        y: 165,
        xPercent: 80,
        duration: 0.3,
        ease: "power4.out"
      },'-=0.3');

      t7content.fromTo(
        [upperheading, mainheading, bottomheading,sideupperheading,sidemainheading,sidebottomheading],
        { y: 100 ,xPercent:0},
        { y: 0, xPercent: 0, duration: 0.5, ease: "power4.out" }
      ).fromTo(
        '.logo3',
        {y:0,xPercent:0},
        {y:-48,xPercent:0,duration:0.5,ease:"power4.out"}
      ),"-=0.5";


  });

gsap.to(".playground",{
    scrollTrigger: {
        trigger: "#sec1",
        toggleActions: "play restart restart pause",
        start:"top center",
        end:"+=100%",
        // markers:"true",
        onToggle:self=>{
            if(self.isActive){
                removedotinfront(1)
                setheadingcontent(0)
                setsideheadingcontent(0)
                maindiv.style.backgroundColor=colorschema[0][0]
                scrolldiv.style.backgroundColor=colorschema[0][1]
                transring.style.backgroundColor=colorschema[0][0]
                const progress=0/6
                gsap.to('#Opaque_Ring', { strokeDashoffset: opaqueRingLength * (1 - progress), duration: 0.5 });
                gsap.to('#dot1',{ opacity: 1, duration: 0.5 })

                
            }
        }
    }, 
    duration: 0, 
    rotation:360,
    ease: "none", 
})



gsap.to(".playground",{
    scrollTrigger: {
        trigger: "#sec2",
        toggleActions: "restart none none none",
        start:"top center",
    end:"+=100%",
    // markers:"true",
    onToggle:self=>{
        if(self.isActive){
            removedotinfront(2)
            adddotbackward(1)
            setheadingcontent(1)
            setsideheadingcontent(1)
            maindiv.style.backgroundColor=colorschema[1][0]
            scrolldiv.style.backgroundColor=colorschema[1][1]
            transring.style.backgroundColor=colorschema[1][0]
            const progress=1/6
            gsap.to('#Opaque_Ring', { strokeDashoffset: opaqueRingLength * (1 - progress), duration: 0.5 });
            gsap.to('#dot2',{ opacity: 1, duration: 0.5 })
        }
    }
    }, 
    duration: 0,  
    ease: "none",
    
})

gsap.to(".playground",{
    scrollTrigger: {
        trigger: "#sec3",
        toggleActions: "restart none none none",
        start:"top center",
        end:"+=99%",
        // markers:"true",
        onToggle:self=>{
            if(self.isActive){
                removedotinfront(3)
                adddotbackward(2)
                setheadingcontent(2)
                setsideheadingcontent(2)
                maindiv.style.backgroundColor=colorschema[2][0]
                scrolldiv.style.backgroundColor=colorschema[2][1]  
                transring.style.backgroundColor=colorschema[2][0]

                const progress=2/6
                gsap.to('#Opaque_Ring', { strokeDashoffset: opaqueRingLength * (1 - progress), duration: 0.5 });
                gsap.to('#dot3',{ opacity: 1, duration: 0.5 })
            }
        }
    }, 
    duration: 0,  
    ease: "none", 
})

gsap.to(".playground",{
    scrollTrigger: {
        trigger: "#sec4",
        toggleActions: "restart none none none",
        start:"top center",
        end:"+=99%",
        // markers:"true",
        onToggle:self=>{
            if(self.isActive){
                removedotinfront(4)
                adddotbackward(3)
                setheadingcontent(3)
                setsideheadingcontent(3)
                maindiv.style.backgroundColor=colorschema[3][0]
                scrolldiv.style.backgroundColor=colorschema[3][1] 
                transring.style.backgroundColor=colorschema[3][0] 

                const progress=3/6
                gsap.to('#Opaque_Ring', { strokeDashoffset: opaqueRingLength * (1 - progress), duration: 0.5 });
                gsap.to('#dot4',{ opacity: 1, duration: 0.5 })
                // sections.forEach((section,index)=>{
                //     section.style.backgroundColor=colorschema[3][1] 
                // }) 
            }
        }
    }, 
    duration: 0,  
    ease: "none", 
})

gsap.to(".playground",{
    scrollTrigger: {
        trigger: "#sec5",
        toggleActions: "restart none none none",
        start:"top center",
        end:"+=99%",
        // markers:"true",
        onToggle:self=>{
            if(self.isActive){
                removedotinfront(5)
                adddotbackward(4)
                setheadingcontent(4)
                setsideheadingcontent(4)
                maindiv.style.backgroundColor=colorschema[4][0]
                scrolldiv.style.backgroundColor=colorschema[4][1]
                transring.style.backgroundColor=colorschema[4][0] 
                
                const progress=4/6
                gsap.to('#Opaque_Ring', { strokeDashoffset: opaqueRingLength * (1 - progress), duration: 0.5 });
                gsap.to('#dot5',{ opacity: 1, duration: 0.5 })
                // sections.forEach((section,index)=>{
                //     section.style.backgroundColor=colorschema[4][1] 
                // }) 
            }
        }
    }, 
    duration: 0,  
    ease: "none", 
})

gsap.to(".playground",{
    scrollTrigger: {
        trigger: "#sec6",
        toggleActions: "restart none none none",
        start:"top center",
        end:"+=99%",
        // markers:"true",
        onToggle:self=>{
            if(self.isActive){
                removedotinfront(6)
                adddotbackward(5)
                setheadingcontent(5)
                setsideheadingcontent(5)
                maindiv.style.backgroundColor=colorschema[5][0]
                scrolldiv.style.backgroundColor="none" 
                transring.style.backgroundColor=colorschema[5][0]

                const progress=5/6
                gsap.to('#Opaque_Ring', { strokeDashoffset: opaqueRingLength * (1 - progress), duration: 0.5 });
                gsap.to('#dot6',{ opacity: 1, duration: 0.5 })
                // sections.forEach((section,index)=>{
                //     section.style.backgroundColor=colorschema[5][1] 
                // }) 
            }
        }
    }, 
    duration: 0,  
    ease: "none", 
})

gsap.to(".playground",{
    scrollTrigger: {
        trigger: "#sec7",
        toggleActions: "restart none none none",
        start:"top center",
        end:"+=99%",
        // markers:"true",
        onToggle:self=>{
            if(self.isActive){
                setheadingcontent(6)
                setsideheadingcontent(6)
                adddotbackward(5)
                maindiv.style.backgroundColor=colorschema[6][0]
                scrolldiv.style.backgroundColor=colorschema[6][1] 
                transring.style.backgroundColor=colorschema[6][0] 

                const progress=6/6
                gsap.to('#Opaque_Ring', { strokeDashoffset: opaqueRingLength * (1 - progress), duration: 0.5 });
                gsap.to('#dot7',{ opacity: 1, duration: 0.5 })
            }
        }
    }, 
    duration: 0,  
    ease: "none", 
})
