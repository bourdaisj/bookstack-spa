interface IEmitEventParameters {
  event_name: string;
  payload?: Record<string, unknown>;
  bubbles?: boolean 
}

export function emitEvent({ event_name, payload, bubbles = true }: IEmitEventParameters) {
  this.dispatchEvent(new CustomEvent(event_name, { bubbles, detail: payload }))
}