import React, { useEffect } from 'react';
import 'aframe';
import 'aframe-ar';

const ARViewer = () => {
  useEffect(() => {
    // URL to your 3D model
    const modelUrl = 'https://sketchfab.com/models/dc79e84850cb4b9d958721b0c1882259/embed?camera=0&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_hint=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0';

    const marker = document.createElement('a-marker');
    marker.setAttribute('type', 'pattern');
    marker.setAttribute('url', 'your-pattern-marker.patt'); // Replace with your pattern marker file

    const model = document.createElement('a-entity');
    model.setAttribute('gltf-model', modelUrl);
    model.setAttribute('scale', '0.1 0.1 0.1');

    marker.appendChild(model);

    const scene = document.querySelector('a-scene');
    scene.appendChild(marker);
  }, []);

  return (
    <div>
      <a-scene embedded arjs>
        <a-entity camera></a-entity>
      </a-scene>
    </div>
  );
};

export default ARViewer;
