import React from 'react'
import QRCode from 'qrcode.react'
import ARViewer from '../components/ARViewer'

const App = () => {
  const modelUrl =
    'https://sketchfab.com/models/dc79e84850cb4b9d958721b0c1882259/embed?camera=0&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_hint=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0' // URL to your 3D model

  return (
    <div>
      <QRCode value={modelUrl} />
      {/* <ARViewer /> */}
    </div>
  )
}

export default App
