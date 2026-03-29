function ConfirmModal({
  isOpen,
  title,
  message,
  cancelLabel,
  confirmLabel,
  onCancel,
  onConfirm,
  isLoading,
}) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
      onClick={onCancel}
    >
      <div
        role="dialog"
        aria-modal="true"
        className="animate-scale-in w-full max-w-md rounded-xl border border-[#4A2E12]/15 bg-white p-6 shadow-soft"
        onClick={(event) => event.stopPropagation()}
      >
        <h3 className="text-xl font-semibold text-[#4A2E12]">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-[#4A2E12]/85">{message}</p>

        <div className="mt-6 flex flex-wrap justify-end gap-3">
          <button
            type="button"
            onClick={onCancel}
            disabled={isLoading}
            className="rounded-xl border border-[#4A2E12]/25 px-4 py-2 text-sm font-semibold text-[#4A2E12] transition hover:bg-[#4A2E12]/5 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {cancelLabel}
          </button>
          <button
            type="button"
            onClick={onConfirm}
            disabled={isLoading}
            className="rounded-xl bg-[#F4C41C] px-4 py-2 text-sm font-semibold text-[#4A2E12] transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmModal
