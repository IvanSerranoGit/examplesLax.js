// window.onload = function () {
//     window.addEventListener("scroll", (e) => {
//         console.log(window.scrollY);
//       });
//     lax.init()

//     // Add a driver that we use to control our animations
//     lax.addDriver('scrollY', function () {
//       return window.scrollY
//     });

//     // Add animation bindings to elements
//     lax.addElements('.item', {
//       scrollY: {
//         opacity: [
//             [0, 100],
//             [1, 0]
//           ],
//           opacity: [
//             [100, 200],
//             [0, 1]
//           ],
//       }
//     })
//   }


window.onload = function () {
    lax.init()

    lax.addDriver('scrollY', function () {
      return window.scrollY
    })

    const container = document.querySelector('.container')
    const count = 100

    for (let i = 0; i < count; i++) {
      const el = document.createElement('div')
      el.className = "circle"
      container.appendChild(el)
    }

    lax.addElements(".circle", {
      scrollY: {
        translateX: [
          ["elInY", "elCenterY", "elOutY"],
          [0, 'screenWidth/2', 'screenWidth'],
          {
            easing: 'easeInOutQuart',
          }
        ],
        opacity: [
          ["elInY", "elCenterY", "elOutY"],
          [0, 1, 0],
          {
            easing: 'easeInOutCubic'
          }
        ],
        "border-radius": [
          ["elInY+200", "elCenterY", "elOutY-200"],
          [0, 100, 0],
          {
            easing: 'easeInOutQuint',
          }
        ],
        "box-shadow": [
          ["elInY+200", "elCenterY", "elOutY-200"],
          [50, 0, 50],
          {
            easing: 'easeInOutQuint',
            cssFn: (val) => {
              return `${val}px ${val}px ${val}px rgba(0,0,0,0.5)`
            }
          }
        ],
      }
    })
  }