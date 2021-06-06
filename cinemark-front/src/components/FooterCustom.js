import React from 'react'
import { Columns, Container, Heading, Section } from 'react-bulma-components'
import { GrFacebookOption, GrTwitter, GrInstagram } from 'react-icons/gr';
import '../assets/FooterCustom.css';

export default function FooterCustom() {
    return (
        <footer className="footer">
            <Section>
                <Container>
                    <Columns>
                        <Columns.Column>
                            <Heading size={5}> Sobre Cinemark</Heading>
                            <Heading subtitle size={6}>Quiénes somos</Heading>
                            <Heading subtitle size={6}>Términos y condiciones</Heading>

                        </Columns.Column>
                        <Columns.Column>
                            <Heading size={5}>Contáctanos</Heading>
                            <Heading subtitle size={6}>Pqrs</Heading>
                        </Columns.Column>
                        <Columns.Column>
                            <Heading size={5}>Marketing empresarial</Heading>
                            <Heading subtitle size={6}>Ventas corporativas</Heading>
                            <Heading subtitle size={6}>Eventos</Heading>
                            <Heading subtitle size={6}>Publicidad</Heading>

                        </Columns.Column>
                        <Columns.Column size={4}>
                            <Heading size={5}>Descarga nuestra App</Heading>
                            <Columns>
                                <Columns.Column>
                                    <svg style={{ width: '100%', height: '100%', maxWidth: '12rem' }} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 135.25 40"><defs><linearGradient id="Degradado_sin_nombre_5" x1="-148.99" y1="423.87" x2="-150.29" y2="424.53" gradientTransform="matrix(12.93, 0, 0, -25.07, 1978.4, 10687.83)" gradientUnits="userSpaceOnUse"><stop offset={0} stopColor="#4596d2" /><stop offset="0.01" stopColor="#4597d3" /><stop offset="0.26" stopColor="#3eb9eb" /><stop offset="0.51" stopColor="#49c1ed" /><stop offset="0.76" stopColor="#5ac3e6" /><stop offset={1} stopColor="#5ec4e4" /></linearGradient><linearGradient id="Degradado_sin_nombre_2" x1="-147.48" y1="396.56" x2="-149.86" y2="396.56" gradientTransform="matrix(10.17, 0, 0, -8.56, 1533.48, 3412.53)" gradientUnits="userSpaceOnUse"><stop offset={0} stopColor="#ffe006" /><stop offset="0.41" stopColor="#fbbc0d" /><stop offset="0.78" stopColor="#f6a316" /><stop offset={1} stopColor="#f59a1a" /></linearGradient><linearGradient id="Degradado_sin_nombre_3" x1="-149.67" y1="404.56" x2="-151.03" y2="406.33" gradientTransform="matrix(16.69, 0, 0, -12.87, 2601.18, 5320.07)" gradientUnits="userSpaceOnUse"><stop offset={0} stopColor="#e84049" /><stop offset={1} stopColor="#c40f62" /></linearGradient><linearGradient id="Degradado_sin_nombre_4" x1="-161.39" y1="402.8" x2="-160.79" y2="403.59" gradientTransform="matrix(16.69, 0, 0, -12.87, 2601.18, 5306.32)" gradientUnits="userSpaceOnUse"><stop offset={0} stopColor="#30a071" /><stop offset="0.07" stopColor="#2ca771" /><stop offset="0.48" stopColor="#4db26f" /><stop offset="0.8" stopColor="#5fb568" /><stop offset={1} stopColor="#63b664" /></linearGradient></defs><title>badge_playstore</title><g id="Capa_2" data-name="Capa 2"><g id="Capa_1-2" data-name="Capa 1"><g id="Grupo_10203" data-name="Grupo 10203"><g id="Grupo_9842" data-name="Grupo 9842"><rect id="Rectángulo_17776" data-name="Rectángulo 17776" width={135} height={40} rx={5} /><g id="Grupo_9839" data-name="Grupo 9839"><g id="Grupo_9838" data-name="Grupo 9838"><path id="Trazado_4628" data-name="Trazado 4628" fill="#a6a5a5" className="cls-1" d="M130.25.8a4.2,4.2,0,0,1,4.2,4.2V35a4.2,4.2,0,0,1-4.2,4.2H5.25A4.2,4.2,0,0,1,1.05,35h0V5A4.2,4.2,0,0,1,5.25.8h125m0-.8H5.25a5,5,0,0,0-5,5V35a5,5,0,0,0,5,5h125a5,5,0,0,0,5-5V5A5,5,0,0,0,130.25,0Z" /></g></g><path id="Trazado_4629" data-name="Trazado 4629" fill="#fff" className="cls-2" d="M68.39,21.75A4.26,4.26,0,1,0,72.65,26a4.2,4.2,0,0,0-4.13-4.26Zm0,6.83a2.58,2.58,0,1,1,2.39-2.76c0,.06,0,.12,0,.19a2.47,2.47,0,0,1-2.34,2.57Zm-9.32-6.83A4.26,4.26,0,1,0,63.34,26a4.19,4.19,0,0,0-4.13-4.26Zm0,6.83a2.58,2.58,0,1,1,2.4-2.76V26a2.46,2.46,0,0,1-2.34,2.57ZM48,23.06v1.8h4.32a3.8,3.8,0,0,1-1,2.27A4.45,4.45,0,0,1,48,28.45a4.8,4.8,0,0,1,0-9.6,4.59,4.59,0,0,1,3.26,1.29l1.27-1.27A6.27,6.27,0,0,0,48,17.05a6.61,6.61,0,1,0-.17,13.21H48a6.06,6.06,0,0,0,4.6-1.85,6,6,0,0,0,1.57-4.23,6.06,6.06,0,0,0-.1-1.12Zm45.31,1.4a4,4,0,0,0-3.64-2.71,4,4,0,0,0-4,4.07c0,.06,0,.12,0,.19a4.16,4.16,0,0,0,4.07,4.25h.15a4.23,4.23,0,0,0,3.55-1.89l-1.45-1a2.44,2.44,0,0,1-2.1,1.17,2.14,2.14,0,0,1-2.06-1.29l5.68-2.35Zm-5.8,1.42a2.34,2.34,0,0,1,2.19-2.48h0a1.65,1.65,0,0,1,1.58.9ZM82.88,30h1.87V17.5H82.88Zm-3.06-7.3h-.07a3,3,0,0,0-2.24-.95,4.26,4.26,0,0,0,0,8.51,2.94,2.94,0,0,0,2.24-1h.06v.61c0,1.63-.87,2.5-2.27,2.5a2.35,2.35,0,0,1-2.14-1.51l-1.63.67a4.07,4.07,0,0,0,3.77,2.52c2.19,0,4-1.29,4-4.43V22H79.82Zm-2.14,5.88a2.58,2.58,0,0,1,0-5.15A2.4,2.4,0,0,1,80,25.94.22.22,0,0,0,80,26a2.38,2.38,0,0,1-2.18,2.56ZM102.06,17.5H97.58V30h1.87V25.26h2.61a3.89,3.89,0,1,0,.41-7.76,2.8,2.8,0,0,0-.41,0Zm0,6H99.45V19.24h2.65a2.14,2.14,0,0,1,.1,4.28h-.1Zm11.54-1.8a3.5,3.5,0,0,0-3.33,1.91l1.65.7a2,2,0,0,1,3.67.69v.13a4.15,4.15,0,0,0-1.95-.49c-1.78,0-3.6,1-3.6,2.82a2.9,2.9,0,0,0,3,2.75h.08A2.64,2.64,0,0,0,115.56,29h.07v1h1.8V25.19c0-2.22-1.65-3.46-3.79-3.46Zm-.23,6.85c-.61,0-1.46-.3-1.46-1.06,0-1,1.06-1.33,2-1.33a3.22,3.22,0,0,1,1.7.41,2.25,2.25,0,0,1-2.21,2ZM124,22l-2.14,5.42h-.06L119.57,22h-2l3.33,7.58L119,33.79h2L126.07,22Zm-16.8,8h1.86V17.5h-1.87Z" /><g id="Grupo_9841" data-name="Grupo 9841"><path id="Trazado_4630" data-name="Trazado 4630" fill="url(#Degradado_sin_nombre_5)" className="cls-3" d="M10.68,7.54a2,2,0,0,0-.46,1.4V31.06a2,2,0,0,0,.46,1.4l.08.08L23.15,20.15v-.29L10.76,7.47Z" /><path id="Trazado_4631" data-name="Trazado 4631" fill="url(#Degradado_sin_nombre_2)" className="cls-4" d="M27.28,24.28l-4.13-4.13v-.29l4.13-4.14.09.06,4.9,2.78c1.4.79,1.4,2.09,0,2.89l-4.9,2.77Z" /><path id="Trazado_4632" data-name="Trazado 4632" fill="url(#Degradado_sin_nombre_3)" className="cls-5" d="M27.37,24.22,23.15,20,10.68,32.46a1.63,1.63,0,0,0,2.08.07l14.61-8.3" /><path id="Trazado_4633" data-name="Trazado 4633" fill="url(#Degradado_sin_nombre_4)" className="cls-6" d="M27.37,15.78,12.76,7.48a1.6,1.6,0,0,0-2.07.06L23.15,20Z" /><g id="Grupo_9840" data-name="Grupo 9840"><path id="Trazado_4634" data-name="Trazado 4634" style={{ opacity: '0.2', isolation: 'isolate' }} className="cls-7" d="M27.28,24.13,12.76,32.38a1.66,1.66,0,0,1-2,0h0l-.07.07h0l.07.08h0a1.68,1.68,0,0,0,2,0l14.61-8.3Z" /><path id="Trazado_4635" data-name="Trazado 4635" style={{ isolation: 'isolate', opacity: '0.12' }} className="cls-8" d="M10.68,32.32a2.05,2.05,0,0,1-.46-1.41v.15a2,2,0,0,0,.46,1.4l.08-.07Z" /></g><path id="Trazado_4636" data-name="Trazado 4636" style={{ isolation: 'isolate', opacity: '0.12' }} className="cls-8" d="M32.26,21.3l-5,2.83.09.1,4.89-2.78A1.76,1.76,0,0,0,33.31,20h0A1.84,1.84,0,0,1,32.26,21.3Z" /><path id="Trazado_4637" data-name="Trazado 4637" fill="#fff" style={{ isolation: 'isolate', opacity: '0.25' }} className="cls-9" d="M12.76,7.62,32.26,18.7A1.86,1.86,0,0,1,33.31,20h0a1.73,1.73,0,0,0-1.05-1.44L12.76,7.48c-1.4-.8-2.54-.14-2.54,1.46v.15C10.22,7.49,11.37,6.83,12.76,7.62Z" /></g></g><g id="Grupo_9843" data-name="Grupo 9843"><path id="Trazado_4638" data-name="Trazado 4638" fill="#fff" style={{ stroke: 'rgb(255, 255, 255)', strokeMiterlimit: 10, strokeWidth: '0.2px' }} className="cls-10" d="M41.53,13V7h1.83a2.85,2.85,0,0,1,3,3,2.85,2.85,0,0,1-3,3Zm.77-.74h1.06a2.23,2.23,0,0,0,1.65-.6A2.18,2.18,0,0,0,45.62,10a2.09,2.09,0,0,0-1.89-2.26H42.3Z" /><path id="Trazado_4639" data-name="Trazado 4639" fill="#fff" style={{ stroke: 'rgb(255, 255, 255)', strokeMiterlimit: 10, strokeWidth: '0.2px' }} className="cls-10" d="M47.49,13V7h.77v6Z" /><path id="Trazado_4640" data-name="Trazado 4640" fill="#fff" style={{ stroke: 'rgb(255, 255, 255)', strokeMiterlimit: 10, strokeWidth: '0.2px' }} className="cls-10" d="M51.33,13.13a2.18,2.18,0,0,1-1.28-.42,2,2,0,0,1-.82-1.2l.7-.29a1.58,1.58,0,0,0,.52.84,1.34,1.34,0,0,0,.87.34,1.46,1.46,0,0,0,.86-.27.84.84,0,0,0,.36-.71.93.93,0,0,0-.36-.78,3.79,3.79,0,0,0-1.12-.51,2.91,2.91,0,0,1-1.21-.65,1.29,1.29,0,0,1-.41-1A1.48,1.48,0,0,1,50,7.34a2.16,2.16,0,0,1,2.57-.09,1.76,1.76,0,0,1,.62.83l-.7.29a1,1,0,0,0-.37-.52,1.31,1.31,0,0,0-1.53,0,.74.74,0,0,0-.31.61.73.73,0,0,0,.29.57,2.91,2.91,0,0,0,.85.41,6.61,6.61,0,0,1,.74.28,3.61,3.61,0,0,1,.6.35,1.46,1.46,0,0,1,.46.56,1.82,1.82,0,0,1,.16.76,1.75,1.75,0,0,1-.18.78,1.59,1.59,0,0,1-.48.55,2.41,2.41,0,0,1-1.35.41Z" /><path id="Trazado_4641" data-name="Trazado 4641" fill="#fff" style={{ stroke: 'rgb(255, 255, 255)', strokeMiterlimit: 10, strokeWidth: '0.2px' }} className="cls-10" d="M55.21,13h-.78V7h2a1.86,1.86,0,0,1,1.32.51A1.73,1.73,0,0,1,57.89,10l-.09.09a1.86,1.86,0,0,1-1.32.51H55.21Zm0-3.17H56.5a1,1,0,0,0,.78-.32,1,1,0,0,0,0-1.44,1,1,0,0,0-.78-.33H55.21Z" /><path id="Trazado_4642" data-name="Trazado 4642" fill="#fff" style={{ stroke: 'rgb(255, 255, 255)', strokeMiterlimit: 10, strokeWidth: '0.2px' }} className="cls-10" d="M64.24,12.23a3.13,3.13,0,0,1-4.41,0,3.26,3.26,0,0,1,0-4.45,3.11,3.11,0,0,1,4.4,0h0a3.23,3.23,0,0,1,0,4.44Zm-3.84-.5a2.34,2.34,0,0,0,3.27,0,2.58,2.58,0,0,0,0-3.45,2.32,2.32,0,0,0-3.27,0A2.58,2.58,0,0,0,60.4,11.73Z" /><path id="Trazado_4643" data-name="Trazado 4643" fill="#fff" style={{ stroke: 'rgb(255, 255, 255)', strokeMiterlimit: 10, strokeWidth: '0.2px' }} className="cls-10" d="M66.2,13V7h.94l2.92,4.67h0l0-1.16V7h.77v6H70L67,8.11h0l0,1.15V13Z" /><path id="Trazado_4644" data-name="Trazado 4644" fill="#fff" style={{ stroke: 'rgb(255, 255, 255)', strokeMiterlimit: 10, strokeWidth: '0.2px' }} className="cls-10" d="M72.2,13V7H73v6Z" /><path id="Trazado_4645" data-name="Trazado 4645" fill="#fff" style={{ stroke: 'rgb(255, 255, 255)', strokeMiterlimit: 10, strokeWidth: '0.2px' }} className="cls-10" d="M74.35,13V7h2.17a1.73,1.73,0,0,1,1.22.47,1.51,1.51,0,0,1,.51,1.16,1.28,1.28,0,0,1-.22.76,1.34,1.34,0,0,1-.59.49v0a1.46,1.46,0,0,1,.73.52,1.36,1.36,0,0,1,.28.85,1.57,1.57,0,0,1-.54,1.22,1.83,1.83,0,0,1-1.28.49Zm.77-3.43h1.4A.93.93,0,0,0,77.23,8a.86.86,0,0,0-.68-.28H75.12Zm0,2.69h1.55a.89.89,0,0,0,.72-.31,1,1,0,0,0,.28-.68,1,1,0,0,0-1-1H75.12Z" /><path id="Trazado_4646" data-name="Trazado 4646" fill="#fff" style={{ stroke: 'rgb(255, 255, 255)', strokeMiterlimit: 10, strokeWidth: '0.2px' }} className="cls-10" d="M79.49,13V7h.77v5.26h2.6V13Z" /><path id="Trazado_4647" data-name="Trazado 4647" fill="#fff" style={{ stroke: 'rgb(255, 255, 255)', strokeMiterlimit: 10, strokeWidth: '0.2px' }} className="cls-10" d="M87.33,7.74H84.6v1.9h2.47v.72H84.6v1.9h2.73V13h-3.5V7h3.5Z" /><path id="Trazado_4648" data-name="Trazado 4648" fill="#fff" style={{ stroke: 'rgb(255, 255, 255)', strokeMiterlimit: 10, strokeWidth: '0.2px' }} className="cls-10" d="M94.06,7.74H91.32v1.9h2.47v.72H91.32v1.9h2.74V13h-3.5V7h3.5Z" /><path id="Trazado_4649" data-name="Trazado 4649" fill="#fff" style={{ stroke: 'rgb(255, 255, 255)', strokeMiterlimit: 10, strokeWidth: '0.2px' }} className="cls-10" d="M95.26,13V7h.94l2.92,4.67h0l0-1.16V7h.77v6h-.81L96,8.11h0l0,1.15V13Z" /></g></g></g></g></svg>
                                </Columns.Column>
                                <Columns.Column>
                                    <svg width="100%" height="100%" maxwidth="12rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1033.46 310.04"><defs><style dangerouslySetInnerHTML={{ __html: ".prefix__afbb87bb-46d4-4f2f-8c5f-d329dde14490{fill:#fff}" }} /></defs><g id="prefix__b6b7c107-f321-4960-a1c5-e90d3e6ab4dc" data-name="Capa 2"><g id="prefix__fa6fb672-3d53-4837-912b-94017f23c456" data-name="Layer 1"><path d="M960.55 0h-896c-2.35 0-4.67.06-7 .1a101.75 101.75 0 00-15.34 1.36 51 51 0 00-14.54 4.8 49.48 49.48 0 00-12.39 9 47.82 47.82 0 00-9 12.4 50.46 50.46 0 00-4.79 14.59A98.33 98.33 0 00.12 57.56C0 59.91 0 62.26 0 64.61v180.84c0 2.38 0 4.68.12 7.06a98.33 98.33 0 001.37 15.31 50.26 50.26 0 004.78 14.57 47.4 47.4 0 009 12.35 47.81 47.81 0 0012.39 9 51.41 51.41 0 0014.54 4.83 103.06 103.06 0 0015.33 1.35c2.37.05 4.69.08 7 .08H968.8c2.33 0 4.72 0 7-.08a101.62 101.62 0 0015.3-1.35 52.21 52.21 0 0014.6-4.83 47.92 47.92 0 0012.38-9 49.17 49.17 0 009-12.35 50.47 50.47 0 004.73-14.57 103.52 103.52 0 001.42-15.31v-7.06c.06-2.78.06-5.54.06-8.37V73c0-2.8 0-5.58-.06-8.35v-7a103.52 103.52 0 00-1.23-15.4 50.66 50.66 0 00-4.73-14.57 49.47 49.47 0 00-21.47-21.42 51.83 51.83 0 00-14.6-4.8A100.34 100.34 0 00975.9.11c-2.33 0-4.72-.08-7-.1z" fill="#b6b6b6" /><path d="M64.61 303.34c-2.33 0-4.6 0-6.92-.08a97 97 0 01-14.3-1.26 44.85 44.85 0 01-12.67-4.19A41.2 41.2 0 0120 290a40.7 40.7 0 01-7.81-10.68 43.74 43.74 0 01-4.15-12.68 94.17 94.17 0 01-1.28-14.35c0-1.61-.11-7-.11-7V64.61s.07-5.29.11-6.85a94.21 94.21 0 011.3-14.32 44 44 0 014.16-12.72A41.15 41.15 0 0120 20a42.64 42.64 0 0110.73-7.82A44.69 44.69 0 0143.36 8a96.52 96.52 0 0114.35-1.21l6.91-.1h904.19l7 .1A94.48 94.48 0 01990 8a45.1 45.1 0 0112.79 4.19 42.8 42.8 0 0118.48 18.51 44.27 44.27 0 014.09 12.62 98.66 98.66 0 011.33 14.44v6.81c.06 2.87.06 5.6.06 8.35v164.16c0 2.78 0 5.5-.06 8.23v7.11a95.64 95.64 0 01-1.31 14.18 43.65 43.65 0 01-4.13 12.78 43.24 43.24 0 01-18.47 18.43A45 45 0 01990 302a95.76 95.76 0 01-14.3 1.25c-2.24.05-4.59.08-6.86.08h-8.3z" /><path className="prefix__afbb87bb-46d4-4f2f-8c5f-d329dde14490" d="M321.3 58.45h27.47l-.77 7.41h-17.52v11.32H347v6.91h-16.52v12.55H349l-.67 7.48h-27zM367.34 80.81l-14.19-22.36h10.38l9 15.58L382 58.45h10.1L378 80.53l15.27 23.59h-10.51l-10.31-17.19-10.34 17.19H352zM398.82 58.45h12.8q8.92 0 13.68 3.61t4.77 10.42A14.84 14.84 0 01428 80.4a13.6 13.6 0 01-5.75 5.17 19.06 19.06 0 01-8.46 1.8 31 31 0 01-5.8-.57v17.32h-9.17zm19.82 20a7.56 7.56 0 002.22-5.88q0-3.94-2.37-5.64c-1.57-1.14-3.91-1.71-7-1.71H408v14.9a25.22 25.22 0 004.07.41q4.34 0 6.57-2.04zM437.64 58.45h9.17v37.94h18.29l-.66 7.73h-26.8zM477.29 101.88a19.17 19.17 0 01-7.77-8.06 25.89 25.89 0 01-2.68-12.06 26.57 26.57 0 012.87-12.63 20.06 20.06 0 018.29-8.36 26.06 26.06 0 0112.73-3 24.24 24.24 0 0112.09 2.85 19.06 19.06 0 017.73 8 25.88 25.88 0 012.66 12 26.79 26.79 0 01-2.89 12.76 20.12 20.12 0 01-8.28 8.37 25.89 25.89 0 01-12.6 2.94 24.31 24.31 0 01-12.15-2.81zm20.12-6.34a12.89 12.89 0 004.59-5.82 21.83 21.83 0 001.55-8.47 23.92 23.92 0 00-1.36-8.32 12.36 12.36 0 00-4.33-5.84 12.66 12.66 0 00-7.65-2.17 12.82 12.82 0 00-7.6 2.2A13.63 13.63 0 00478 73a20.77 20.77 0 00-1.55 8.15 22.57 22.57 0 001.48 8.42 12.82 12.82 0 004.51 5.88 12.5 12.5 0 007.47 2.16 13 13 0 007.5-2.07zm-13.32-40.49l8.26-9.88 9.12.79-11.64 9.78zM521.62 58.45h15q8.16 0 12.27 3.17a10.7 10.7 0 014.09 9 13.74 13.74 0 01-4.91 10.82 15.4 15.4 0 01-4.25 2.56l13.91 20.16h-10.54l-11.32-17.8h-5.08v17.76h-9.17zm13 21.13a10.08 10.08 0 004.65-1 7.54 7.54 0 003.16-2.88 8.27 8.27 0 001.12-4.32 5.42 5.42 0 00-2-4.62 9.42 9.42 0 00-5.73-1.47h-5.12v14.29zM588.73 92.54h-17.48l-4.13 11.58h-9.24l17.73-45.7h9l18.1 45.7h-9.81zm-15-7.06h12.39l-4.33-12.08c-.63-1.66-1.25-3.61-1.86-5.83-.51 1.84-1.11 3.78-1.8 5.8zM608.31 58.45h9.18v37.94h18.29l-.66 7.73h-26.81zM648 101.88a19.19 19.19 0 01-7.78-8.06 25.89 25.89 0 01-2.68-12.06 26.57 26.57 0 012.87-12.63 20.09 20.09 0 018.25-8.36 26 26 0 0112.72-3 24.28 24.28 0 0112.1 2.85 19 19 0 017.72 8 25.76 25.76 0 012.67 12 26.79 26.79 0 01-2.9 12.76 20.07 20.07 0 01-8.28 8.37 25.86 25.86 0 01-12.6 2.94 24.24 24.24 0 01-12.09-2.81zm20.12-6.34a12.89 12.89 0 004.62-5.82 21.83 21.83 0 001.54-8.47 23.92 23.92 0 00-1.35-8.32 12.38 12.38 0 00-4.34-5.84 12.66 12.66 0 00-7.65-2.17 12.82 12.82 0 00-7.6 2.2 13.54 13.54 0 00-4.71 5.88 20.77 20.77 0 00-1.56 8.15 22.57 22.57 0 001.48 8.42 12.89 12.89 0 004.51 5.88 12.54 12.54 0 007.47 2.16 13 13 0 007.56-2.07zM712.44 58.45h27.47l-.76 7.41h-17.53v11.32h16.49v6.91h-16.49v12.55h18.51l-.66 7.48h-27zM748.87 58.45h10.56l21.13 33.87q-.31-5.67-.32-9.3V58.45h8.43v45.67h-10.25l-21.48-34.41c.23 4 .34 7.55.34 10.72v23.69h-8.41zM383.29 209.54h-35.86l-8.78 24h-15.77l35.12-89.6h14.91l35.92 89.59h-16.57zM352 197.36h26.77l-9.59-25.66q-2-5.32-3.89-11.75-1.74 5.69-3.77 11.63zM416 183.14q0-7.42-.5-16.33h14.3a73.3 73.3 0 011.11 8.48q8.91-9.72 20.41-9.71a23 23 0 0121.55 14q3.5 7.28 3.49 18.46 0 11.69-4 20a28.58 28.58 0 01-11.16 12.56 31.84 31.84 0 01-16.57 4.26 40.91 40.91 0 01-13.42-2.28v27.57L416 261.42zm40.16 34.1q4.67-6.27 4.67-18.33 0-11.19-3.87-16.24a12.35 12.35 0 00-10.29-5 16.63 16.63 0 00-8.23 2.1 30.86 30.86 0 00-7.17 5.63v35.74a23.22 23.22 0 005.32 1.76 28.62 28.62 0 006 .65q8.85-.03 13.52-6.31zM486.14 183.14q0-7.42-.5-16.33H500a73.3 73.3 0 011.11 8.48q8.91-9.72 20.41-9.71a23 23 0 0121.55 14q3.5 7.28 3.49 18.46 0 11.69-4 20a28.58 28.58 0 01-11.16 12.56 31.84 31.84 0 01-16.57 4.26 40.91 40.91 0 01-13.42-2.28v27.57l-15.27 1.3zm40.16 34.1q4.7-6.24 4.7-18.33 0-11.19-3.87-16.24a12.35 12.35 0 00-10.29-5 16.66 16.66 0 00-8.23 2.1 30.86 30.86 0 00-7.17 5.63v35.74a23.22 23.22 0 005.32 1.76 28.69 28.69 0 006 .65q8.87-.03 13.54-6.31zM575.36 229.3a37.18 37.18 0 01-15.21-15.68q-5.31-10.2-5.31-24.11 0-15.09 6.12-25.63a39.32 39.32 0 0116.66-15.83 52 52 0 0123.65-5.29 62.61 62.61 0 0114.75 1.7 64.07 64.07 0 0113.08 4.67l-3.89 11.75Q613 155.06 602 155.07a32.53 32.53 0 00-16.36 4 27.16 27.16 0 00-10.92 11.72q-3.88 7.74-3.89 18.68a45.07 45.07 0 003 17 25.07 25.07 0 009.46 11.75q6.46 4.34 16.29 4.33a54.66 54.66 0 008.91-.74 46.68 46.68 0 008.34-2.17V201.5h-20.75v-11.87h35.55v37.72a79.65 79.65 0 01-16.1 5.51 76.07 76.07 0 01-16.79 1.91q-13.48 0-23.38-5.47zM686.67 233.53a57.2 57.2 0 01-1-8.84 29.25 29.25 0 01-9.19 7.14 27.24 27.24 0 01-12.76 2.94 24 24 0 01-10.49-2.26 17.48 17.48 0 01-7.51-6.8 20.92 20.92 0 01-2.78-11.1q0-9.71 7-15.49t23.31-5.78a84.35 84.35 0 0112.12.87v-1.3q0-8.85-3.77-12.46t-10.82-3.62a42.8 42.8 0 00-10.46 1.42 56.36 56.36 0 00-9.77 3.4l-2.41-11.13a59 59 0 0110.77-3.4 62.35 62.35 0 0114.09-1.54 36.8 36.8 0 0114.72 2.63 19.3 19.3 0 019.46 9q3.4 6.41 3.4 17.22V221q0 4.14.5 12.55zm-9.15-12.36a24.52 24.52 0 007.79-5.69v-12.37a99.08 99.08 0 00-10.2-.68q-9.47 0-13.08 3.06a10.28 10.28 0 00-3.62 8.26q0 5 2.63 7.33a10.26 10.26 0 007.14 2.38 21.57 21.57 0 009.34-2.29zM713.88 217.52v-78.84l15.21-1.24v77.36c0 2.84.48 4.85 1.46 6a5.62 5.62 0 004.6 1.76 17.3 17.3 0 004-.68l1.8 11a26.66 26.66 0 01-5.29 1.39 35.65 35.65 0 01-5.91.52q-15.86-.02-15.87-17.27zM751.91 217.52v-78.84l15.21-1.24v77.36c0 2.84.48 4.85 1.46 6a5.62 5.62 0 004.6 1.76 17.3 17.3 0 004-.68l1.8 11a26.66 26.66 0 01-5.29 1.39 35.65 35.65 0 01-5.91.52q-15.86-.02-15.87-17.27zM842.32 202.12h-43.66q1.05 21 20 21a42.5 42.5 0 009.61-1.15 56.79 56.79 0 009.43-3.06l3.3 10.42a56.78 56.78 0 01-25.17 5.44q-10.64 0-17.93-4a25.86 25.86 0 01-11-11.56q-3.68-7.55-3.67-18.18 0-11.07 3.89-19A28.41 28.41 0 01798 169.78a30.39 30.39 0 0116-4.2q9.45 0 15.8 4.42a26.42 26.42 0 019.4 11.78 41.94 41.94 0 013.12 16.22zm-14.91-9.71q-.42-8-4-12a12.26 12.26 0 00-9.59-4 12.89 12.89 0 00-9.68 4q-3.86 4-5 11.93zM854.63 183.57q0-5.5-.5-16.76h14.28c.25 1.86.49 4.07.72 6.65s.38 4.67.46 6.28a55.82 55.82 0 015.22-7.39 21.56 21.56 0 016-4.89 16.07 16.07 0 017.82-1.88 21.55 21.55 0 016.06.74l-1.91 13.23a17.07 17.07 0 00-4.95-.68 16.26 16.26 0 00-9.4 2.75 38.06 38.06 0 00-8.59 9.06v42.85h-15.21zM903.86 260.84a39.27 39.27 0 01-5.51-1.33l2.78-11.13c1 .28 2.33.56 3.9.83a26.25 26.25 0 004.45.4q10.14 0 15.21-13.05l1-2.47-24.61-67.28h16.39l12.37 37.6a123.1 123.1 0 013.89 14.78q1.74-7.24 4.08-14.47l12.55-37.91h15.4L941.2 234.4a69.49 69.49 0 01-7.48 15.46 26.19 26.19 0 01-9.49 8.72 28.4 28.4 0 01-13.2 2.84 41.48 41.48 0 01-7.17-.58z" /><path d="M209.45 56.4H123.2c-40.63 0-55.49 14.86-55.49 55.49v86.25c0 40.63 14.86 55.5 55.49 55.5h86.23c40.63 0 55.52-14.87 55.52-55.5v-86.25c.05-40.63-14.87-55.49-55.5-55.49z" fill="#ce0e2d" fillRule="evenodd" id="prefix__b0c75d98-5791-4807-9af1-4bb72022b437" data-name="\u5F62\u72B6 1 \u62F7\u8D1D 25" /><path className="prefix__afbb87bb-46d4-4f2f-8c5f-d329dde14490" d="M106.77 155H112v25.78h-5.23v-10.43H95v10.47h-5.28V155H95v10.4h11.81zm29.47 14.76c0 4.19-2.08 6.43-5.86 6.43s-5.89-2.3-5.89-6.61v-14.53h-5.24v14.75c0 7.25 4 11.41 11.06 11.41s11.16-4.24 11.16-11.63V155h-5.23zm60.47 3L190.86 155h-4.28l-5.85 17.73-5.73-17.68h-5.56l9 25.77h4.33l5.87-16.93 5.86 16.93h4.37l9-25.77h-5.42zm20.51-3h9.52V165h-9.52v-5.28H231v-4.7h-19v25.76h19.47v-4.7h-14.25zm20.55 11.06h5.16V155h-5.16zm-86-5.35l-2.34 5.37h-5.34l11.4-25.84h4.61l11.32 25.77h-5.49l-2.32-5.37zm1.95-4.65h7.91l-4-9.23zM166.33 122.2a32.86 32.86 0 01-32.83-32.83h4.64a28.19 28.19 0 1056.38 0h4.64a32.86 32.86 0 01-32.83 32.83z" /></g></g></svg>
                                </Columns.Column>
                                <Columns.Column>
                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', maxWidth: '12rem' }} viewBox="0 0 135.25 39.99"><title>badge_appstore</title><g id="Capa_2" data-name="Capa 2"><g id="Capa_1-2" data-name="Capa 1"><g id="Capa_2-2" data-name="Capa 2"><g id="Capa_1-2-2" data-name="Capa 1-2"><g id="badge-download-on-the-app-store"><g id="Grupo_9853" data-name="Grupo 9853"><g id="Grupo_9851" data-name="Grupo 9851"><path id="Trazado_4737" data-name="Trazado 4737" fill="#a6a5a5" className="cls-1" d="M125.74,0H7.5a13.39,13.39,0,0,0-2,.18A6.44,6.44,0,0,0,3.6.81,6.33,6.33,0,0,0,2,2,6.07,6.07,0,0,0,.8,3.62a6.74,6.74,0,0,0-.63,1.9,12.18,12.18,0,0,0-.17,2v25a13.39,13.39,0,0,0,.18,2,6.74,6.74,0,0,0,.63,1.9A6,6,0,0,0,2,38,6.07,6.07,0,0,0,3.6,39.18a6.44,6.44,0,0,0,1.9.63,13.39,13.39,0,0,0,2,.18H127.74a13.39,13.39,0,0,0,2-.18,6.74,6.74,0,0,0,1.9-.63,6.41,6.41,0,0,0,3.43-4.69,13.39,13.39,0,0,0,.18-2v-25a13.39,13.39,0,0,0-.18-2,6.72,6.72,0,0,0-.62-1.9,6.53,6.53,0,0,0-2.8-2.8A6.78,6.78,0,0,0,129.74.2a13.39,13.39,0,0,0-2-.18h-2Z" /><path id="Trazado_4738" data-name="Trazado 4738" d="M8.42,39.12h-.9A11.62,11.62,0,0,1,5.66,39,5.92,5.92,0,0,1,4,38.4a5.58,5.58,0,0,1-1.4-1,5.12,5.12,0,0,1-1-1.4A5.67,5.67,0,0,1,1,34.34a11.71,11.71,0,0,1-.17-1.87V7.55A11.71,11.71,0,0,1,1,5.68,5.6,5.6,0,0,1,1.58,4a5.12,5.12,0,0,1,1-1.4A5.58,5.58,0,0,1,4,1.6a5.67,5.67,0,0,1,1.66-.54A11.84,11.84,0,0,1,7.52.89H127.73a13,13,0,0,1,1.86.16,5.85,5.85,0,0,1,1.67.55A5.59,5.59,0,0,1,133.67,4a6,6,0,0,1,.54,1.65,13.41,13.41,0,0,1,.17,1.89V32.47a12.72,12.72,0,0,1-.17,1.85,5.83,5.83,0,0,1-.54,1.67,5.63,5.63,0,0,1-2.42,2.41,5.73,5.73,0,0,1-1.65.6,11.7,11.7,0,0,1-1.87.16H8.42Z" /></g><g id="_Group_" data-name=" Group "><g id="_Group_2" data-name=" Group 2"><g id="_Group_3" data-name=" Group 3"><path id="_Path_" data-name=" Path " fill="#fff" className="cls-2" d="M24.75,20.3a4.92,4.92,0,0,1,2.36-4.15,5.08,5.08,0,0,0-4-2.16c-1.68-.18-3.31,1-4.17,1s-2.19-1-3.61-1a5.31,5.31,0,0,0-4.47,2.73c-1.88,3.39-.48,8.28,1.37,11,.93,1.32,2,2.8,3.43,2.75s1.91-.89,3.58-.89,2.14.89,3.59.86,2.43-1.34,3.32-2.67a10.85,10.85,0,0,0,1.52-3.09A4.78,4.78,0,0,1,24.75,20.3Z" /><path id="_Path_2" data-name=" Path 2" fill="#fff" className="cls-2" d="M22,12.21a4.86,4.86,0,0,0,1.11-3.49,5,5,0,0,0-3.21,1.66,4.63,4.63,0,0,0-1.14,3.36A4.11,4.11,0,0,0,22,12.21Z" /></g></g><g id="Grupo_9852" data-name="Grupo 9852"><path id="Trazado_4739" data-name="Trazado 4739" fill="#fff" className="cls-2" d="M42.28,27.14H37.55L36.41,30.5h-2L38.9,18.08H41L45.46,30.5h-2ZM38,25.59h3.75L40,20.14h0Z" /><path id="Trazado_4740" data-name="Trazado 4740" fill="#fff" className="cls-2" d="M55.14,26c0,2.81-1.51,4.62-3.78,4.62A3.09,3.09,0,0,1,48.51,29h0v4.48h-1.9v-12h1.8V23h0a3.19,3.19,0,0,1,2.88-1.6C53.63,21.35,55.14,23.16,55.14,26Zm-1.91,0c0-1.83-1-3-2.39-3s-2.38,1.23-2.38,3,1,3.05,2.38,3.05S53.23,27.82,53.23,26Z" /><path id="Trazado_4741" data-name="Trazado 4741" fill="#fff" className="cls-2" d="M65.1,26c0,2.81-1.5,4.62-3.77,4.62A3.09,3.09,0,0,1,58.48,29h0v4.48h-1.9v-12h1.8V23h0a3.21,3.21,0,0,1,2.89-1.6C63.59,21.35,65.1,23.16,65.1,26Zm-1.91,0c0-1.83-.94-3-2.39-3s-2.37,1.23-2.37,3,1,3,2.37,3S63.19,27.82,63.19,26Z" /><path id="Trazado_4742" data-name="Trazado 4742" fill="#fff" className="cls-2" d="M71.69,27c.14,1.23,1.33,2,3,2s2.69-.81,2.69-1.92-.68-1.54-2.29-1.94l-1.61-.39c-2.28-.55-3.33-1.62-3.33-3.35,0-2.14,1.86-3.61,4.51-3.61s4.43,1.47,4.49,3.61H77.24c-.11-1.24-1.14-2-2.63-2s-2.52.75-2.52,1.85c0,.88.65,1.4,2.25,1.8l1.37.33c2.55.6,3.61,1.63,3.61,3.44,0,2.33-1.86,3.78-4.8,3.78-2.75,0-4.61-1.42-4.73-3.67Z" /><path id="Trazado_4743" data-name="Trazado 4743" fill="#fff" className="cls-2" d="M83.33,19.3v2.14h1.72v1.47H83.33v5c0,.77.34,1.13,1.1,1.13.2,0,.41,0,.61,0V30.5a4.19,4.19,0,0,1-1,.09c-1.84,0-2.55-.69-2.55-2.45V22.91H80.14V21.44h1.32V19.3Z" /><path id="Trazado_4744" data-name="Trazado 4744" fill="#fff" className="cls-2" d="M86.05,26c0-2.85,1.67-4.64,4.29-4.64s4.29,1.79,4.29,4.64S93,30.61,90.34,30.61,86.05,28.83,86.05,26Zm6.69,0c0-1.95-.9-3.11-2.4-3.11S88,24,88,26s.9,3.11,2.4,3.11S92.74,27.93,92.74,26Z" /><path id="Trazado_4745" data-name="Trazado 4745" fill="#fff" className="cls-2" d="M96.17,21.44H98V23h0a2.16,2.16,0,0,1,2.18-1.63,2.73,2.73,0,0,1,.64.07v1.73A2.55,2.55,0,0,0,100,23a1.88,1.88,0,0,0-2,1.75V30.5H96.17Z" /><path id="Trazado_4746" data-name="Trazado 4746" fill="#fff" className="cls-2" d="M109.36,27.84c-.25,1.64-1.85,2.77-3.9,2.77-2.63,0-4.26-1.77-4.26-4.6s1.64-4.68,4.19-4.68,4.08,1.72,4.08,4.46v.64h-6.4v.11a2.36,2.36,0,0,0,2.14,2.56h.3a2,2,0,0,0,2.09-1.27Zm-6.28-2.7h4.53a2.18,2.18,0,0,0-2-2.3h-.17a2.3,2.3,0,0,0-2.31,2.27h0Z" /></g></g></g><g style={{ isolation: 'isolate' }} className="cls-3"><path fill="#fff" className="cls-2" d="M35.68,14V8.31h1.75A2.4,2.4,0,0,1,39.22,9a2.43,2.43,0,0,1,.68,1.77v.78A2.33,2.33,0,0,1,37.43,14Zm.77-5.08v4.47h1a1.58,1.58,0,0,0,1.24-.51,1.92,1.92,0,0,0,.46-1.33v-.79a1.88,1.88,0,0,0-.46-1.32,1.55,1.55,0,0,0-1.24-.52Z" /><path fill="#fff" className="cls-2" d="M42.56,14.08a1.75,1.75,0,0,1-1.4-.59A2.19,2.19,0,0,1,40.64,12V11.8a2.18,2.18,0,0,1,.53-1.5,1.65,1.65,0,0,1,1.27-.6,1.61,1.61,0,0,1,1.3.51,2.06,2.06,0,0,1,.44,1.38v.48H41.43v0a1.7,1.7,0,0,0,.31,1,1,1,0,0,0,.83.39,2.08,2.08,0,0,0,.69-.11,1.88,1.88,0,0,0,.51-.31l.3.5a1.75,1.75,0,0,1-.6.37A2.42,2.42,0,0,1,42.56,14.08Zm-.12-3.78a.85.85,0,0,0-.66.33,1.49,1.49,0,0,0-.33.81v0h1.95v-.1a1.16,1.16,0,0,0-.25-.76A.87.87,0,0,0,42.44,10.3Z" /><path fill="#fff" className="cls-2" d="M47.5,12.88a.53.53,0,0,0-.2-.42,1.78,1.78,0,0,0-.73-.29,3.11,3.11,0,0,1-1.16-.45.91.91,0,0,1-.39-.78,1.1,1.1,0,0,1,.44-.88,2,2,0,0,1,2.31,0,1.12,1.12,0,0,1,.42.93v0h-.73a.7.7,0,0,0-.23-.5.86.86,0,0,0-.62-.22.89.89,0,0,0-.61.18.58.58,0,0,0-.2.43.49.49,0,0,0,.18.4,1.81,1.81,0,0,0,.71.26,3.07,3.07,0,0,1,1.19.46.93.93,0,0,1,.4.79,1.1,1.1,0,0,1-.46.91,1.85,1.85,0,0,1-1.19.35,1.82,1.82,0,0,1-1.27-.41,1.14,1.14,0,0,1-.44-.95v0h.74a.71.71,0,0,0,.3.6,1.25,1.25,0,0,0,.67.19,1.08,1.08,0,0,0,.64-.17A.51.51,0,0,0,47.5,12.88Z" /><path fill="#fff" className="cls-2" d="M50.94,13.48a1,1,0,0,0,.67-.24.72.72,0,0,0,.3-.58h.69v0a1.17,1.17,0,0,1-.48,1,1.8,1.8,0,0,1-1.18.42,1.72,1.72,0,0,1-1.41-.6A2.34,2.34,0,0,1,49,12V11.8a2.33,2.33,0,0,1,.49-1.5,1.72,1.72,0,0,1,1.41-.6,1.69,1.69,0,0,1,1.21.43,1.35,1.35,0,0,1,.46,1.08v0h-.69a.91.91,0,0,0-.28-.66.93.93,0,0,0-.69-.27.92.92,0,0,0-.86.44,2,2,0,0,0-.26,1.06V12a2.11,2.11,0,0,0,.25,1.08A1,1,0,0,0,50.94,13.48Z" /><path fill="#fff" className="cls-2" d="M56.07,14a2.73,2.73,0,0,1-.06-.34,1.43,1.43,0,0,1,0-.29,1.84,1.84,0,0,1-.56.51,1.49,1.49,0,0,1-.74.2,1.37,1.37,0,0,1-1-.34,1.23,1.23,0,0,1-.35-.93,1.09,1.09,0,0,1,.49-.94,2.28,2.28,0,0,1,1.33-.35H56v-.41a.78.78,0,0,0-.23-.59.86.86,0,0,0-.64-.22.9.9,0,0,0-.6.19.56.56,0,0,0-.23.46h-.74v0a1,1,0,0,1,.44-.84,1.77,1.77,0,0,1,1.19-.38,1.74,1.74,0,0,1,1.15.36,1.3,1.3,0,0,1,.44,1v2c0,.15,0,.3,0,.44a3,3,0,0,0,.09.41Zm-1.28-.57a1.37,1.37,0,0,0,.75-.21,1,1,0,0,0,.44-.49V12h-.86a1.13,1.13,0,0,0-.75.24.71.71,0,0,0-.28.55.57.57,0,0,0,.18.44A.74.74,0,0,0,54.79,13.43Z" /></g><g style={{ isolation: 'isolate' }} className="cls-3"><path fill="#fff" className="cls-2" d="M59.87,10.45l-.4,0a.93.93,0,0,0-.51.14.94.94,0,0,0-.32.41v3h-.77V9.77h.69l.07.62a1.48,1.48,0,0,1,.44-.51,1.07,1.07,0,0,1,.61-.18h.17l.12,0Z" /></g><g style={{ isolation: 'isolate' }} className="cls-3"><path fill="#fff" className="cls-2" d="M60.37,12a2.78,2.78,0,0,1,.45-1.65,1.4,1.4,0,0,1,1.23-.62,1.45,1.45,0,0,1,.7.16,1.33,1.33,0,0,1,.51.46l.09-.55H64V14a1.62,1.62,0,0,1-.47,1.25,2,2,0,0,1-1.37.44,2.74,2.74,0,0,1-.66-.09,2.28,2.28,0,0,1-.62-.23l.2-.59a1.8,1.8,0,0,0,.5.19,2.78,2.78,0,0,0,.57.07,1.12,1.12,0,0,0,.82-.26A1.06,1.06,0,0,0,63.2,14v-.47a1.39,1.39,0,0,1-.5.4,1.53,1.53,0,0,1-.66.13,1.47,1.47,0,0,1-1.22-.56,2.3,2.3,0,0,1-.45-1.47Zm.77.08a1.76,1.76,0,0,0,.27,1,.93.93,0,0,0,.82.39,1,1,0,0,0,.58-.16,1.23,1.23,0,0,0,.39-.45V10.91a1.16,1.16,0,0,0-.39-.43,1,1,0,0,0-.57-.16.9.9,0,0,0-.83.46A2.33,2.33,0,0,0,61.14,12Z" /><path fill="#fff" className="cls-2" d="M67.68,14c0-.13,0-.24-.06-.34a2.83,2.83,0,0,1,0-.29,2,2,0,0,1-.56.51,1.5,1.5,0,0,1-.75.2,1.35,1.35,0,0,1-1-.34,1.23,1.23,0,0,1-.35-.93,1.07,1.07,0,0,1,.49-.94,2.28,2.28,0,0,1,1.33-.35h.84v-.41a.78.78,0,0,0-.23-.59.86.86,0,0,0-.64-.22.88.88,0,0,0-.6.19.57.57,0,0,0-.24.46h-.73v0a1,1,0,0,1,.44-.84,1.74,1.74,0,0,1,1.18-.38,1.77,1.77,0,0,1,1.16.36,1.3,1.3,0,0,1,.44,1v2a3.17,3.17,0,0,0,0,.44,2,2,0,0,0,.09.41Zm-1.27-.57a1.39,1.39,0,0,0,.75-.21,1.06,1.06,0,0,0,.44-.49V12h-.87a1.1,1.1,0,0,0-.74.24.68.68,0,0,0-.28.55.57.57,0,0,0,.18.44A.72.72,0,0,0,66.41,13.43Z" /><path fill="#fff" className="cls-2" d="M71.48,10.45l-.39,0a.93.93,0,0,0-.51.14,1,1,0,0,0-.33.41v3h-.77V9.77h.69l.08.62a1.38,1.38,0,0,1,.44-.51,1,1,0,0,1,.61-.18h.16l.13,0Z" /><path fill="#fff" className="cls-2" d="M76,14.08a1.77,1.77,0,0,1-1.41-.59A2.24,2.24,0,0,1,74,12V11.8a2.14,2.14,0,0,1,.54-1.5,1.65,1.65,0,0,1,1.27-.6,1.6,1.6,0,0,1,1.29.51,2,2,0,0,1,.44,1.38v.48H74.84v0a1.7,1.7,0,0,0,.31,1,1,1,0,0,0,.83.39,2,2,0,0,0,.68-.11,1.62,1.62,0,0,0,.51-.31l.3.5a1.8,1.8,0,0,1-.59.37A2.42,2.42,0,0,1,76,14.08Zm-.12-3.78a.82.82,0,0,0-.66.33,1.57,1.57,0,0,0-.34.81v0h2v-.1a1.21,1.21,0,0,0-.24-.76A.87.87,0,0,0,75.85,10.3Z" /><path fill="#fff" className="cls-2" d="M79.13,9.77l.06.63a1.55,1.55,0,0,1,.53-.52,1.43,1.43,0,0,1,.72-.18,1.37,1.37,0,0,1,1.06.4,1.72,1.72,0,0,1,.37,1.23V14H81.1V11.35a1.16,1.16,0,0,0-.22-.8.89.89,0,0,0-.67-.23,1.07,1.07,0,0,0-.59.16,1.24,1.24,0,0,0-.41.44V14h-.77V9.77Z" /><path fill="#fff" className="cls-2" d="M85.81,14H85V7.91h.77Z" /><path fill="#fff" className="cls-2" d="M89.59,14c0-.13,0-.24-.06-.34a2.83,2.83,0,0,1,0-.29,2,2,0,0,1-.56.51,1.5,1.5,0,0,1-.75.2,1.35,1.35,0,0,1-1-.34,1.23,1.23,0,0,1-.35-.93,1.09,1.09,0,0,1,.49-.94,2.28,2.28,0,0,1,1.33-.35h.84v-.41a.78.78,0,0,0-.23-.59.86.86,0,0,0-.64-.22.88.88,0,0,0-.6.19.57.57,0,0,0-.24.46h-.73v0a1,1,0,0,1,.44-.84,1.74,1.74,0,0,1,1.18-.38,1.77,1.77,0,0,1,1.16.36,1.3,1.3,0,0,1,.44,1v2a3.17,3.17,0,0,0,0,.44,3,3,0,0,0,.09.41Zm-1.27-.57a1.37,1.37,0,0,0,.75-.21,1.06,1.06,0,0,0,.44-.49V12h-.87a1.1,1.1,0,0,0-.74.24.68.68,0,0,0-.28.55.57.57,0,0,0,.18.44A.72.72,0,0,0,88.32,13.43Z" /></g><g style={{ isolation: 'isolate' }} className="cls-3"><path style={{ fill: 'none', stroke: 'rgb(255, 255, 255)', strokeWidth: '0.1px' }} className="cls-4" d="M35.68,14V8.31h1.75A2.4,2.4,0,0,1,39.22,9a2.43,2.43,0,0,1,.68,1.77v.78A2.33,2.33,0,0,1,37.43,14Zm.77-5.08v4.47h1a1.58,1.58,0,0,0,1.24-.51,1.92,1.92,0,0,0,.46-1.33v-.79a1.88,1.88,0,0,0-.46-1.32,1.55,1.55,0,0,0-1.24-.52Z" /><path style={{ fill: 'none', stroke: 'rgb(255, 255, 255)', strokeWidth: '0.1px' }} className="cls-4" d="M42.56,14.08a1.75,1.75,0,0,1-1.4-.59A2.19,2.19,0,0,1,40.64,12V11.8a2.18,2.18,0,0,1,.53-1.5,1.65,1.65,0,0,1,1.27-.6,1.61,1.61,0,0,1,1.3.51,2.06,2.06,0,0,1,.44,1.38v.48H41.43v0a1.7,1.7,0,0,0,.31,1,1,1,0,0,0,.83.39,2.08,2.08,0,0,0,.69-.11,1.88,1.88,0,0,0,.51-.31l.3.5a1.75,1.75,0,0,1-.6.37A2.42,2.42,0,0,1,42.56,14.08Zm-.12-3.78a.85.85,0,0,0-.66.33,1.49,1.49,0,0,0-.33.81v0h1.95v-.1a1.16,1.16,0,0,0-.25-.76A.87.87,0,0,0,42.44,10.3Z" /><path style={{ fill: 'none', stroke: 'rgb(255, 255, 255)', strokeWidth: '0.1px' }} className="cls-4" d="M47.5,12.88a.53.53,0,0,0-.2-.42,1.78,1.78,0,0,0-.73-.29,3.11,3.11,0,0,1-1.16-.45.91.91,0,0,1-.39-.78,1.1,1.1,0,0,1,.44-.88,2,2,0,0,1,2.31,0,1.12,1.12,0,0,1,.42.93v0h-.73a.7.7,0,0,0-.23-.5.86.86,0,0,0-.62-.22.89.89,0,0,0-.61.18.58.58,0,0,0-.2.43.49.49,0,0,0,.18.4,1.81,1.81,0,0,0,.71.26,3.07,3.07,0,0,1,1.19.46.93.93,0,0,1,.4.79,1.1,1.1,0,0,1-.46.91,1.85,1.85,0,0,1-1.19.35,1.82,1.82,0,0,1-1.27-.41,1.14,1.14,0,0,1-.44-.95v0h.74a.71.71,0,0,0,.3.6,1.25,1.25,0,0,0,.67.19,1.08,1.08,0,0,0,.64-.17A.51.51,0,0,0,47.5,12.88Z" /><path style={{ fill: 'none', stroke: 'rgb(255, 255, 255)', strokeWidth: '0.1px' }} className="cls-4" d="M50.94,13.48a1,1,0,0,0,.67-.24.72.72,0,0,0,.3-.58h.69v0a1.17,1.17,0,0,1-.48,1,1.8,1.8,0,0,1-1.18.42,1.72,1.72,0,0,1-1.41-.6A2.34,2.34,0,0,1,49,12V11.8a2.33,2.33,0,0,1,.49-1.5,1.72,1.72,0,0,1,1.41-.6,1.69,1.69,0,0,1,1.21.43,1.35,1.35,0,0,1,.46,1.08v0h-.69a.91.91,0,0,0-.28-.66.93.93,0,0,0-.69-.27.92.92,0,0,0-.86.44,2,2,0,0,0-.26,1.06V12a2.11,2.11,0,0,0,.25,1.08A1,1,0,0,0,50.94,13.48Z" /><path style={{ fill: 'none', stroke: 'rgb(255, 255, 255)', strokeWidth: '0.1px' }} className="cls-4" d="M56.07,14a2.73,2.73,0,0,1-.06-.34,1.43,1.43,0,0,1,0-.29,1.84,1.84,0,0,1-.56.51,1.49,1.49,0,0,1-.74.2,1.37,1.37,0,0,1-1-.34,1.23,1.23,0,0,1-.35-.93,1.09,1.09,0,0,1,.49-.94,2.28,2.28,0,0,1,1.33-.35H56v-.41a.78.78,0,0,0-.23-.59.86.86,0,0,0-.64-.22.9.9,0,0,0-.6.19.56.56,0,0,0-.23.46h-.74v0a1,1,0,0,1,.44-.84,1.77,1.77,0,0,1,1.19-.38,1.74,1.74,0,0,1,1.15.36,1.3,1.3,0,0,1,.44,1v2c0,.15,0,.3,0,.44a3,3,0,0,0,.09.41Zm-1.28-.57a1.37,1.37,0,0,0,.75-.21,1,1,0,0,0,.44-.49V12h-.86a1.13,1.13,0,0,0-.75.24.71.71,0,0,0-.28.55.57.57,0,0,0,.18.44A.74.74,0,0,0,54.79,13.43Z" /></g><g style={{ isolation: 'isolate' }} className="cls-3"><path style={{ fill: 'none', stroke: 'rgb(255, 255, 255)', strokeWidth: '0.1px' }} className="cls-4" d="M59.87,10.45l-.4,0a.93.93,0,0,0-.51.14.94.94,0,0,0-.32.41v3h-.77V9.77h.69l.07.62a1.48,1.48,0,0,1,.44-.51,1.07,1.07,0,0,1,.61-.18h.17l.12,0Z" /></g><g style={{ isolation: 'isolate' }} className="cls-3"><path style={{ fill: 'none', stroke: 'rgb(255, 255, 255)', strokeWidth: '0.1px' }} className="cls-4" d="M60.37,12a2.78,2.78,0,0,1,.45-1.65,1.4,1.4,0,0,1,1.23-.62,1.45,1.45,0,0,1,.7.16,1.33,1.33,0,0,1,.51.46l.09-.55H64V14a1.62,1.62,0,0,1-.47,1.25,2,2,0,0,1-1.37.44,2.74,2.74,0,0,1-.66-.09,2.28,2.28,0,0,1-.62-.23l.2-.59a1.8,1.8,0,0,0,.5.19,2.78,2.78,0,0,0,.57.07,1.12,1.12,0,0,0,.82-.26A1.06,1.06,0,0,0,63.2,14v-.47a1.39,1.39,0,0,1-.5.4,1.53,1.53,0,0,1-.66.13,1.47,1.47,0,0,1-1.22-.56,2.3,2.3,0,0,1-.45-1.47Zm.77.08a1.76,1.76,0,0,0,.27,1,.93.93,0,0,0,.82.39,1,1,0,0,0,.58-.16,1.23,1.23,0,0,0,.39-.45V10.91a1.16,1.16,0,0,0-.39-.43,1,1,0,0,0-.57-.16.9.9,0,0,0-.83.46A2.33,2.33,0,0,0,61.14,12Z" /><path style={{ fill: 'none', stroke: 'rgb(255, 255, 255)', strokeWidth: '0.1px' }} className="cls-4" d="M67.68,14c0-.13,0-.24-.06-.34a2.83,2.83,0,0,1,0-.29,2,2,0,0,1-.56.51,1.5,1.5,0,0,1-.75.2,1.35,1.35,0,0,1-1-.34,1.23,1.23,0,0,1-.35-.93,1.07,1.07,0,0,1,.49-.94,2.28,2.28,0,0,1,1.33-.35h.84v-.41a.78.78,0,0,0-.23-.59.86.86,0,0,0-.64-.22.88.88,0,0,0-.6.19.57.57,0,0,0-.24.46h-.73v0a1,1,0,0,1,.44-.84,1.74,1.74,0,0,1,1.18-.38,1.77,1.77,0,0,1,1.16.36,1.3,1.3,0,0,1,.44,1v2a3.17,3.17,0,0,0,0,.44,2,2,0,0,0,.09.41Zm-1.27-.57a1.39,1.39,0,0,0,.75-.21,1.06,1.06,0,0,0,.44-.49V12h-.87a1.1,1.1,0,0,0-.74.24.68.68,0,0,0-.28.55.57.57,0,0,0,.18.44A.72.72,0,0,0,66.41,13.43Z" /><path style={{ fill: 'none', stroke: 'rgb(255, 255, 255)', strokeWidth: '0.1px' }} className="cls-4" d="M71.48,10.45l-.39,0a.93.93,0,0,0-.51.14,1,1,0,0,0-.33.41v3h-.77V9.77h.69l.08.62a1.38,1.38,0,0,1,.44-.51,1,1,0,0,1,.61-.18h.16l.13,0Z" /><path style={{ fill: 'none', stroke: 'rgb(255, 255, 255)', strokeWidth: '0.1px' }} className="cls-4" d="M76,14.08a1.77,1.77,0,0,1-1.41-.59A2.24,2.24,0,0,1,74,12V11.8a2.14,2.14,0,0,1,.54-1.5,1.65,1.65,0,0,1,1.27-.6,1.6,1.6,0,0,1,1.29.51,2,2,0,0,1,.44,1.38v.48H74.84v0a1.7,1.7,0,0,0,.31,1,1,1,0,0,0,.83.39,2,2,0,0,0,.68-.11,1.62,1.62,0,0,0,.51-.31l.3.5a1.8,1.8,0,0,1-.59.37A2.42,2.42,0,0,1,76,14.08Zm-.12-3.78a.82.82,0,0,0-.66.33,1.57,1.57,0,0,0-.34.81v0h2v-.1a1.21,1.21,0,0,0-.24-.76A.87.87,0,0,0,75.85,10.3Z" /><path style={{ fill: 'none', stroke: 'rgb(255, 255, 255)', strokeWidth: '0.1px' }} className="cls-4" d="M79.13,9.77l.06.63a1.55,1.55,0,0,1,.53-.52,1.43,1.43,0,0,1,.72-.18,1.37,1.37,0,0,1,1.06.4,1.72,1.72,0,0,1,.37,1.23V14H81.1V11.35a1.16,1.16,0,0,0-.22-.8.89.89,0,0,0-.67-.23,1.07,1.07,0,0,0-.59.16,1.24,1.24,0,0,0-.41.44V14h-.77V9.77Z" /><path style={{ fill: 'none', stroke: 'rgb(255, 255, 255)', strokeWidth: '0.1px' }} className="cls-4" d="M85.81,14H85V7.91h.77Z" /><path style={{ fill: 'none', stroke: 'rgb(255, 255, 255)', strokeWidth: '0.1px' }} className="cls-4" d="M89.59,14c0-.13,0-.24-.06-.34a2.83,2.83,0,0,1,0-.29,2,2,0,0,1-.56.51,1.5,1.5,0,0,1-.75.2,1.35,1.35,0,0,1-1-.34,1.23,1.23,0,0,1-.35-.93,1.09,1.09,0,0,1,.49-.94,2.28,2.28,0,0,1,1.33-.35h.84v-.41a.78.78,0,0,0-.23-.59.86.86,0,0,0-.64-.22.88.88,0,0,0-.6.19.57.57,0,0,0-.24.46h-.73v0a1,1,0,0,1,.44-.84,1.74,1.74,0,0,1,1.18-.38,1.77,1.77,0,0,1,1.16.36,1.3,1.3,0,0,1,.44,1v2a3.17,3.17,0,0,0,0,.44,3,3,0,0,0,.09.41Zm-1.27-.57a1.37,1.37,0,0,0,.75-.21,1.06,1.06,0,0,0,.44-.49V12h-.87a1.1,1.1,0,0,0-.74.24.68.68,0,0,0-.28.55.57.57,0,0,0,.18.44A.72.72,0,0,0,88.32,13.43Z" /></g></g></g></g></g></g></svg>
                                </Columns.Column>
                            </Columns>
                        </Columns.Column>
                        <Columns.Column>
                            <Columns>
                                <Columns.Column>
                                    <GrFacebookOption size={20} className="social__media" />
                                </Columns.Column>
                                <Columns.Column>
                                    <GrTwitter size={20} className="social__media" />
                                </Columns.Column>
                                <Columns.Column>
                                    <GrInstagram size={20} className="social__media" />
                                </Columns.Column>

                            </Columns>
                        </Columns.Column>
                    </Columns>
                </Container>
            </Section>

        </footer>
    )
}
