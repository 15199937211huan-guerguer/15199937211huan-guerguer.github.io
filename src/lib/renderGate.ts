// Gates a continuous render loop: invokes onChange(false) when the page is
// hidden (tab switched) or, if a target is given, when it scrolls offscreen —
// so requestAnimationFrame loops can pause instead of burning CPU forever.
export function renderGate(
  target: HTMLElement | null,
  onChange: (active: boolean) => void
): () => void {
  let visible = !document.hidden;
  let onScreen = target ? false : true;
  let last: boolean | null = null;

  const emit = () => {
    const active = visible && onScreen;
    if (active !== last) {
      last = active;
      onChange(active);
    }
  };

  const onVisibility = () => {
    visible = !document.hidden;
    emit();
  };
  document.addEventListener("visibilitychange", onVisibility);

  let io: IntersectionObserver | undefined;
  if (target) {
    io = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting;
        emit();
      },
      { rootMargin: "200px" }
    );
    io.observe(target);
  }

  emit();

  return () => {
    document.removeEventListener("visibilitychange", onVisibility);
    io?.disconnect();
  };
}
