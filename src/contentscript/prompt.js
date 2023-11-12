export function getSummaryPrompt(transcript) {
  return `Título: "${document.title
    .replace(/\n+/g, " ")
    .trim()}"\nTranscrição do Vídeo: "${transcript
    .replace(/\n+/g, " ")
    .trim()}"\nTente entender o contexto total e forneça um resumo em português separado por tópicos com emojis e pequenos resumos e ao final uma conclusão.`;
}