const layout_state = {
  snackbar: null,
  snackbar_text_content_span: null,
}

export function set_snackbar(snackbar) {
  layout_state.snackbar = snackbar
}

export function set_snackbar_text_content_span(snackbar_text_content_span) {
  layout_state.snackbar_text_content_span = snackbar_text_content_span
}