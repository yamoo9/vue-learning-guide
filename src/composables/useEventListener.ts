import { onActivated, onDeactivated, onMounted, onUnmounted } from 'vue';

export default function useEventListener(
  target: HTMLElement | typeof globalThis,
  eventType: string,
  handler: (e: Event) => void,
  log: boolean = false
) {
  const listeningCallback = () => {
    log && console.log(`${eventType} 리스닝 추가`);
    target.addEventListener(eventType, handler);
  };

  const unlisteningCallback = () => {
    log && console.log(`${eventType} 리스닝 제거`);
    target.removeEventListener(eventType, handler);
  };

  onMounted(listeningCallback);
  onActivated(listeningCallback);

  onDeactivated(unlisteningCallback);
  onUnmounted(unlisteningCallback);
}
