import { useState, useEffect, useRef } from 'react';

export function useDraggablePopup() {
  const [pos, setPos] = useState({ x: null, y: null });
  const isDragging = useRef(false);
  const dragStart = useRef({ mouseX: 0, mouseY: 0, initX: 0, initY: 0 });

  const onMouseDown = (e) => {
    if (e.target.closest('button') || e.target.closest('input')) return;
    isDragging.current = true;
    dragStart.current = {
      mouseX: e.clientX,
      mouseY: e.clientY,
      initX: pos.x !== null ? pos.x : 0,
      initY: pos.y !== null ? pos.y : 0
    };
    e.preventDefault();
  };

  useEffect(() => {
    const onMouseMove = (e) => {
      if (!isDragging.current) return;
      const dx = e.clientX - dragStart.current.mouseX;
      const dy = e.clientY - dragStart.current.mouseY;
      setPos({
        x: dragStart.current.initX + dx,
        y: dragStart.current.initY + dy
      });
    };
    const onMouseUp = () => { isDragging.current = false; };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  return { pos, onMouseDown };
}
