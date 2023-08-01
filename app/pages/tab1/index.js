import Render from './index.rjs';

Page({
  data: {},
  onReady() {
    this.render = new Render(this);
    this.draw();
    this.drawChart();
  },
  async draw() {
    this.render.renderLottie();
  },
  async drawChart() {
    this.render.drawSleep({ percent: 2, value: 2500 });
  }
});
