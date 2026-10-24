import { readFileSync } from 'node:fs'
import assert from 'node:assert/strict'
import { test } from 'node:test'

const html = readFileSync(process.env.BORDOAI_PRIVACY_HTML || new URL('../public/bordoai-politica-de-privacidade.html', import.meta.url), 'utf8')
const text = html.replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ')

test('public policy identifies the app, controller, date and privacy contact', () => {
  for (const value of ['BordoAi', 'TerminaisLMC', '24 de outubro de 2026', 'mailto:alphaterminallmc@hotmail.com']) assert.ok(html.includes(value), value)
  assert.match(html, /<title>Política de Privacidade/)
  assert.match(html, /data-policy-version="2026-10-24"/)
})

test('the policy is readable as plain HTML without scripts, forms or embedded documents', () => {
  assert.match(html, /<html lang="pt-BR">/)
  assert.match(html, /<meta charset="UTF-8"/)
  assert.doesNotMatch(html, /<(?:script|iframe|form|object|embed)\b/i)
  assert.doesNotMatch(text, /�/)
})

test('precise and approximate location, source data and purposes are disclosed', () => {
  for (const value of ['localização precisa ou aproximada', 'latitude, longitude', 'margem de precisão', 'horário da leitura', 'GPS', 'distâncias']) assert.ok(text.includes(value), value)
})

test('background and closed-app collection explain both independent features and permission controls', () => {
  for (const value of ['mesmo quando o aplicativo está fechado ou não está em uso', 'serviço nativo em primeiro plano com notificação', 'aproximadamente de hora em hora', 'permissão de localização em segundo plano', 'Pausar ou Encerrar', 'revogar']) assert.ok(text.includes(value), value)
})

test('permissions and terms alone do not activate tracking', () => {
  assert.match(text, /Permitir localização no Android, aceitar termos.*não inicia, por si só/)
  assert.match(text, /Conceder a permissão não ativa essas funções automaticamente/)
})

test('route storage, upload, recipients and persistent social last location are distinguished', () => {
  for (const value of ['SQLite', 'sincronizados com o Supabase', 'destinatários familiares escolhidos', 'não um histórico de trajetos', 'última posição', 'Desativar a presença']) assert.ok(text.includes(value), value)
})

test('automatic backup and explicitly selected family document copies are disclosed', () => {
  for (const value of ['Backup privado automático', 'automaticamente para backup privado', 'dez versões', 'Arquivos de certificados são versionados por conteúdo', 'Compartilhar documentos com a família é uma ação separada', 'cópias que um destinatário já tenha salvo']) assert.ok(text.includes(value), value)
  assert.doesNotMatch(text, /backup em nuvem ocorre somente após solicitação|O uso local gratuito não exige cadastro|Conta online opcional/)
})

test('map, address, hosting and payment providers are covered', () => {
  for (const value of ['OpenFreeMap', 'HeiGIT/openrouteservice', 'endereço IP', 'Mercado Pago', 'Vercel', 'Google Play', 'Supabase']) assert.ok(text.includes(value), value)
})

test('retention, deletion and privacy contact are accessible', () => {
  assert.match(html, /href="https:\/\/terminais-lmc\.vercel\.app\/bordoai\/excluir-conta"/)
  for (const value of ['Retenção, interrupção e exclusão', 'encerrar uma viagem não a apaga', 'exclusão da conta', 'não possui criptografia de ponta a ponta']) assert.ok(text.includes(value), value)
})

test('all section identifiers are unique and the public URL remains the canonical URL', () => {
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1])
  assert.equal(new Set(ids).size, ids.length)
  assert.equal(ids.length, 19)
  assert.match(html, /rel="canonical" href="https:\/\/terminais-lmc\.vercel\.app\/bordoai-politica-de-privacidade\.html"/)
})
