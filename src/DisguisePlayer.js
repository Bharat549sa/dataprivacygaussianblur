// DisguisePlayer.js
import React, { useRef, useState } from 'react';

const DisguisePlayer = ({ player, onDisguise }) => {
  const canvasRef = useRef(null);
  const [disguiseType, setDisguiseType] = useState('');

  const applyDisguise = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = player.src;
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      if (disguiseType === 'blur') {
        ctx.filter = 'blur(10px)';
        ctx.drawImage(img, 0, 0);
      } else if (disguiseType === 'scribble') {
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(canvas.width, canvas.height);
        ctx.moveTo(canvas.width, 0);
        ctx.lineTo(0, canvas.height);
        ctx.stroke();
      } else if (disguiseType === 'fullColor') {
        ctx.fillStyle = 'rgba(0, 0, 255, 0.5)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      } else if (disguiseType === 'gaussianblur') {
        const width = canvas.width;
        const height = canvas.height;
        const imageData = ctx.getImageData(0, 0, width, height);
        const data = imageData.data;
        const kernel = [
          [1, 4, 7, 4, 1],
          [4, 16, 26, 16, 4],
          [7, 26, 41, 26, 7],
          [4, 16, 26, 16, 4],
          [1, 4, 7, 4, 1]
        ];
        const kernelSize = 5;
        const kernelSum = 273;

        const applyKernel = (x, y) => {
        let r = 0, g = 0, b = 0;
        for (let ky = 0; ky < kernelSize; ky++) {
          for (let kx = 0; kx < kernelSize; kx++) {
            const px = (x + kx - 2) * 4;
            const py = (y + ky - 2) * width * 4;
            const weight = kernel[ky][kx];
            r += data[px + py] * weight;
            g += data[px + py + 1] * weight;
            b += data[px + py + 2] * weight;
          }
        }
        return [r / kernelSum, g / kernelSum, b / kernelSum];
        };

        for (let y = 2; y < height - 2; y++) {
          for (let x = 2; x < width - 2; x++) {
            const [r, g, b] = applyKernel(x, y);
            const index = (x + y * width) * 4;
            data[index] = r;
            data[index + 1] = g;
            data[index + 2] = b;
          }
        }


        ctx.putImageData(imageData, 0, 0);
      }
    };
  };

  const handleDisguiseChange = (event) => {
    setDisguiseType(event.target.value);
  };

  const handleSubmit = () => {
    onDisguise(canvasRef.current.toDataURL());
  };

  return (
    <div>
      <h2>Disguise Player</h2>
      <canvas ref={canvasRef}></canvas>
      <div>
        <label>
          <input
            type="radio"
            value="blur"
            checked={disguiseType === 'blur'}
            onChange={handleDisguiseChange}
          />
          Blur Face
        </label>
        <label>
          <input
            type="radio"
            value="gaussianblur"
            checked={disguiseType === 'gaussianblur'}
            onChange={handleDisguiseChange}
          />
          Gaussian Blur Face
        </label>
        <label>
          <input
            type="radio"
            value="scribble"
            checked={disguiseType === 'scribble'}
            onChange={handleDisguiseChange}
          />
          Scribble
        </label>
        <label>
          <input
            type="radio"
            value="fullColor"
            checked={disguiseType === 'fullColor'}
            onChange={handleDisguiseChange}
          />
          Full Color Modification
        </label>
      </div>
      <button onClick={applyDisguise}>Apply Disguise</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default DisguisePlayer;
