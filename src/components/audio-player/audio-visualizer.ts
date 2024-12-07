export class AudioVisualizer {
  private animationFrame: number | undefined;

  constructor(
    private canvas: HTMLCanvasElement,
    private analyzer: AnalyserNode
  ) {}

  start() {
    this.draw();
  }

  stop() {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
  }

  private draw = () => {
    const ctx = this.canvas.getContext('2d');
    if (!ctx) return;

    const bufferLength = this.analyzer.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    this.analyzer.getByteTimeDomainData(dataArray);

    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    ctx.lineWidth = 2;
    ctx.strokeStyle = 'rgb(0, 255, 0)';
    ctx.shadowBlur = 4;
    ctx.shadowColor = 'rgb(0, 255, 0)';

    ctx.beginPath();
    const sliceWidth = this.canvas.width / bufferLength;
    let x = 0;

    for (let i = 0; i < bufferLength; i++) {
      const v = dataArray[i] / 128.0;
      const y = (v * this.canvas.height) / 2;

      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }

      x += sliceWidth;
    }

    ctx.lineTo(this.canvas.width, this.canvas.height / 2);
    ctx.stroke();

    this.animationFrame = requestAnimationFrame(this.draw);
  };
}
