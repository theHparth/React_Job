import { IncomingMessage, ServerResponse } from "http"
declare function crossOriginEmbedderPolicy(): (_req: IncomingMessage, res: ServerResponse, next: () => void) => void
export default crossOriginEmbedderPolicy
