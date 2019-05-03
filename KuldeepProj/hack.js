  button.addEventListener('click', async() => {
    let device
    const VENDOR_ID = 0x8564
    
    try {
      device = await navigator.usb.requestDevice({
        filters: [{
          vendorId: VENDOR_ID
        }]
      })

      console.log('open')
      await device.open()
      console.log('opened:', device)
    } catch (error) {
      console.log(error)
    }
	 // await device.close()
  })
})
