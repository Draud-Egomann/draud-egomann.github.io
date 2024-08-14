export class rndGenerator {
  /*
   * Function to generate a biased random position along a specific axis
   * @param max The maximum value of the axis
   * @param lowBias The bias towards the low end of the axis (0.0 - 1.0)
   * @param highBias The bias towards the high end of the axis (0.0 - 1.0)
   * @returns The biased random position
   */
  static generateBiasedRandom(max: number, lowBias: number, highBias: number) {
    const biasThresholdLow = max * lowBias;
    const biasThresholdHigh = max * highBias;
    const randomValue = Math.random();

    // Favor low end (first 40% horizontally or top 50% vertically)
    if (randomValue < 0.5) return Math.floor(Math.random() * biasThresholdLow);
    // Favor high end (last 15% vertically)
    else if (randomValue < 0.85)
      return Math.floor(
        Math.random() * (max - biasThresholdHigh) + biasThresholdHigh
      );
    // Uniformly distribute across the remaining area
    else return Math.floor(Math.random() * max);
  }
}
