export class AudioContextManager {
  private audioContext: AudioContext;
  private analyzer: AnalyserNode;
  private source: MediaElementAudioSourceNode;

  constructor(audioElement: HTMLAudioElement) {
    this.audioContext = new AudioContext();
    this.analyzer = this.audioContext.createAnalyser();
    this.analyzer.fftSize = 2048;
    this.source = this.audioContext.createMediaElementSource(audioElement);
    this.source.connect(this.analyzer);
    this.analyzer.connect(this.audioContext.destination);
  }

  async resume() {
    if (this.audioContext.state === 'suspended') {
      await this.audioContext.resume();
    }
  }

  getAnalyzer() {
    return this.analyzer;
  }

  cleanup() {
    return this.audioContext.close();
  }
}
