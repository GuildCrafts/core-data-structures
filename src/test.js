var dots = document.querySelectorAll('.dot')
var colors = ['#007EFF', '#FF3700', '#92FF00']

// Start the 3 dot animations with different delays
function animateDots() {
  for(var i=0; i<dots.length; i++) {
    dynamics.animate(dots[i], {
      translateY: -70,
      backgroundColor: colors[i]
    }, {
      type: dynamics.forceWithGravity,
      bounciness: 800,
      elasticity: 200,
      duration: 2000,
      delay: i * 450
    })
  }

  dynamics.setTimeout(animateDots, 2500)
}

animateDots()
