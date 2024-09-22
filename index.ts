class Statistics {
  private constructor(
    public device_uuid: string,
    public ip_address: string,
    public ts: number,
  ) {}

  public static create(ip_address: string) {
    if (ip_address === '127.0.0.1') {
      return new Error('It cant be localhost.');
    }
    return new Statistics(
      this.generateUUID(),
      ip_address,
      this.getSessionTime(),
    );
  }

  private static generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        const r = (Math.random() * 16) | 0,
          v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      },
    );
  }

  private static getSessionTime() {
    return new Date().getTime();
  }

  public display(): string {
    return `uuid: ${this.device_uuid}, ip address: ${this.ip_address}, ts: ${this.ts}`;
  }
}

const stats = Statistics.create('127.0.0.1'); // Error
if (stats instanceof Statistics) {
  stats.display();
}

const stats2 = Statistics.create('47.47.237.47'); // Statistics
if (stats2 instanceof Statistics) {
  stats2.display();
}
