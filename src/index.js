import { start } from 'chii'

start({
  port: 8080,
  domain: process.env.RENDER_EXTERNAL_HOSTNAME || undefined,
})