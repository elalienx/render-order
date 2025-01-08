type EventCallback = () => void;

export default class TrackingManager {
  private events: Map<number, EventCallback[]>;

  constructor() {
    this.events = new Map();
  }

  /** Method to add an event with a priority */
  public addEvent(priority: number, callback: EventCallback): void {
    if (!this.events.has(priority)) {
      this.events.set(priority, []);
    }
    this.events.get(priority)!.push(callback);
  }

  /** Method to fire all events by priority (ascending order) */
  public fireEvents(): void {
    const sortedPriority = Array.from(this.events.keys()).sort((a, b) => a - b);

    for (const priority of sortedPriority) {
      const callbacks = this.events.get(priority) || [];

      for (const callback of callbacks) {
        callback();
      }
    }
  }
}
