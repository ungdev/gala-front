import React, { useState } from 'react';

import mapGradient from '../../assets/map-gradient.png';
import mapEntry2 from '../../assets/map-entry-2.png';
import mapEntry from '../../assets/map-entry.png';
import mapLogo from '../../assets/map-logo.png';
import mapVignette from '../../assets/map-vignette.png';

import './map.scss';

const enum MapSelection {
  EAT,
  RESTAURANT,
  SOFT_BAR,
  SCENE,
  RECHARGEMENT,
  PHOTO,
  SUMO,
  VESTIAIRE,
  POSTE_SECOURS,
  SAFE_PLACE,
}

function Map() {
  const backdropRef = React.createRef<HTMLDivElement>();
  const [backdropContent, setBackdropContent] = useState<JSX.Element | null>(null);
  const [selection, setSelection] = useState<MapSelection | null>(null);

  const toggleSelection = (selectionUpdate: MapSelection) => {
    setSelection(selectionUpdate === selection ? null : selectionUpdate);
  };

  const getSelectionStatus = (target: MapSelection) => {
    if (selection === target) return 'selected';
    if (selection !== null) return 'unselected';
    return '';
  };

  let handlingBackdrop = false;
  let handlingStartY: number | null = null;

  const openBackdrop = (title: string | null, until?: string | null, ...content: string[]) => {
    setBackdropContent(
      title == null && content.length === 0 ? null : (
        <>
          {title && <div className="backdrop-title">{title}</div>}
          {until && <div className="until">Ouvert {until}</div>}
          {content.map((str, i) => (
            <div key={`key-${i}`} className="backdrop-content">
              {str}
            </div>
          ))}
        </>
      ),
    );
  };

  const startDragBackDrop = (startY: number) => {
    handlingBackdrop = true;
    handlingStartY = startY;
  };

  const moveDragBackDrop = (to: number) => {
    if (handlingStartY && to > handlingStartY)
      (backdropRef.current?.firstChild as HTMLElement).style.bottom = `${handlingStartY - to}px`;
  };

  const endDragBackDrop = (to: number) => {
    if (handlingStartY && handlingBackdrop && to > handlingStartY) {
      handlingBackdrop = false;
      handlingStartY = 0;
      openBackdrop(null);
    }
    (backdropRef.current?.firstChild as HTMLElement).style.bottom = '';
  };

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 669 668"
        className="map">
        <defs>
          <linearGradient
            id="Dégradé_sans_nom_14"
            x1="798.58"
            y1="-33"
            x2="798.58"
            y2="1113.22"
            gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#771617" />
            <stop offset="0.23" stopColor="#9b3e17" />
            <stop offset="0.59" stopColor="#cc7518" />
            <stop offset="0.86" stopColor="#eb9718" />
            <stop offset="1" stopColor="#f7a418" />
          </linearGradient>
          <filter id="luminosity-invert" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feColorMatrix values="-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0" />
          </filter>
          <mask id="mask" x="332" y="481" width="327" height="177" maskUnits="userSpaceOnUse">
            <g className="cls-39">
              <image width="327" height="177" transform="translate(332 481)" xlinkHref={mapVignette} />
            </g>
          </mask>
        </defs>
        <g className="cls-1">
          <g id="Calque_1" data-name="Calque 1">
            <rect className="cls-2" x="-29.27" y="-33" width="1655.7" height="1146.23" />
            <rect className="cls-3" x="-29.27" y="-33" width="1655.7" height="1146.23" />
            <image width="1717" height="706" transform="translate(-430 -34)" xlinkHref={mapGradient} />
            <path
              className="cls-4"
              d="M494.83,152.24l2.77-48.38c-27.48-1-57,1.76-87.27,8.38l9.4,46.85C446.25,153.32,471.69,151.06,494.83,152.24Z"
            />
            <path
              className="cls-4"
              d="M410,161.35,402.82,114a438.94,438.94,0,0,0-86.94,31l19.21,43.61A391.11,391.11,0,0,1,410,161.35Z"
            />
            <path
              className="cls-4"
              d="M377.15,452.28l7.28,50.2a439.81,439.81,0,0,0,86.74-31.32L448.8,425.78A393.17,393.17,0,0,1,377.15,452.28Z"
            />
            <path
              className="cls-4"
              d="M595.09,128c-24.05-13.08-53.28-21-85.66-23.49L504.63,153c30.32,2.92,56.11,12.09,74.36,27.29Z"
            />
            <path
              className="cls-4"
              d="M183.31,407.84a77.24,77.24,0,0,1-6.74-21.78L124.1,364.32c-2.66,24.11.7,47.36,10.89,68.48s26.42,38.35,47.07,51.28L199.39,430A77.9,77.9,0,0,1,183.31,407.84Z"
            />
            <path
              className="cls-4"
              d="M181.16,409.44a70.15,70.15,0,0,1-6.09-19.65l-47.34-19.62c-2.4,21.75.64,42.73,9.83,61.79s23.84,34.6,42.47,46.27l15.64-48.81A70.32,70.32,0,0,1,181.16,409.44Z"
            />
            <path className="cls-5" d="M176.24,395.68c-.47-1.94-.86-3.91-1.17-5.89l-5.54-2.3" />
            <line className="cls-6" x1="157.45" y1="382.48" x2="139.32" y2="374.97" />
            <path className="cls-5" d="M133.28,372.47l-5.55-2.3q-.33,3-.52,6" />
            <path className="cls-7" d="M127,388.93a107.79,107.79,0,0,0,10.52,43,109.21,109.21,0,0,0,32.29,39.2" />
            <path className="cls-5" d="M175,474.93q2.44,1.69,5,3.3l1.83-5.71" />
            <line className="cls-8" x1="185.85" y1="460.06" x2="191.84" y2="441.36" />
            <path className="cls-5" d="M193.84,435.13l1.83-5.71q-2.17-2.1-4.14-4.35" />
            <path className="cls-9" d="M184.87,416.14a71.44,71.44,0,0,1-3.71-6.7,68.92,68.92,0,0,1-3.39-8.4" />
            <path
              className="cls-4"
              d="M293.28,462.58l-3.82,50.52c27.48.84,56.93-2.06,87.18-8.8l-10.08-49.45C340.8,460.71,316,463.26,293.28,462.58Z"
            />
            <path
              className="cls-4"
              d="M190.13,488.81c24.89,13.57,55.35,21.59,89.13,23.8L282.43,462c-29.06-2.27-54.18-10.15-72.78-23.47Z"
            />
            <polygon className="cls-4" points="11.97 214.94 -8.66 277.89 99.34 312.62 120.5 248.59 11.97 214.94" />
            <path
              className="cls-4"
              d="M658.37,293.11a81.63,81.63,0,0,1-12.2,2.17l-7.23,12.46H587.21a233,233,0,0,1-26.71,36.13L254.86,239.78a379.84,379.84,0,0,1,67.75-45l-22.32-42.06A432.83,432.83,0,0,0,230.85,198L241,164.47l-62.41-19-2.71,11.94h-4.34l-9.23,27.67,4.34,1.09-3.25,8.68L140,186.72,153.61,139l-46.13-15.19-15.2,47.76-11.39-3.8,15.19-48.3-50-14.9L26.62,168.81l131.87,41.25-3.33,9.77L23,178.46l-7.74,25.08,159.55,50q-4.35,5.4-8.34,10.89l-38.3-12-2.82,10.19H120.5l-13.57,45.16h5l-2.5,7.33L134,323.65a177.45,177.45,0,0,0-8.64,32l50.25,16.76c.14-30.84,15.89-65.13,43.53-97.48l42,14.06a49.38,49.38,0,1,0,90,30.17L521,376.12l2.49,2.75a382.88,382.88,0,0,1-62.21,40.62l22.63,45.27c53.33-27.8,97.17-64,128-103.06l.24-.23,0,0a274.82,274.82,0,0,0,27.43-41.83l30.68,13.63-8.13,31.07L691,372.43l10.23-27.24,57,14.65L750,386.25l32.6,9.41,24.76-52.94Z"
            />
            <path
              className="cls-4"
              d="M595.32,292.4l47.51-2.31a2.82,2.82,0,0,1,.74-.1,50.29,50.29,0,0,0,9.41-1.21c12.58-36.82,12.6-73.13-2.62-104.68-9.44-19.57-24-35.69-42.39-48.23L587.78,188.7A77.11,77.11,0,0,1,600,206.78C612.08,231.93,609.56,261.89,595.32,292.4Z"
            />
            <path
              className="cls-4"
              d="M601.52,289l40.58-2.15a2.08,2.08,0,0,1,.63-.1,38.85,38.85,0,0,0,8-1.13c10.75-34.26,10.76-68.06-2.24-97.42a111.9,111.9,0,0,0-36.2-44.89L595.08,192.5a72,72,0,0,1,10.39,16.83C615.84,232.73,613.68,260.62,601.52,289Z"
            />
            <path className="cls-5" d="M603.78,283.46q-1.06,2.78-2.26,5.56l6-.32" />
            <line className="cls-10" x1="619.96" y1="288.04" x2="638.64" y2="287.05" />
            <path className="cls-5" d="M644.86,286.65a43.69,43.69,0,0,0,5.91-1c.61-1.92,1.17-3.84,1.71-5.75" />
            <path className="cls-11" d="M655.15,269c6-28.47,4.27-56.17-6.62-80.76a110.67,110.67,0,0,0-27.23-37.54" />
            <path className="cls-5" d="M617.06,147q-2.31-1.91-4.73-3.7l-2,5.67" />
            <line className="cls-12" x1="605.92" y1="161.61" x2="599.28" y2="180.53" />
            <path className="cls-5" d="M597.07,186.84l-2,5.66c1.27,1.54,2.48,3.14,3.63,4.78" />
            <path className="cls-13" d="M605.07,208.42c.13.31.27.61.4.91,8.95,20.2,8.57,43.75.47,68.08" />
            <polygon className="cls-4" points="587.78 457.31 751.65 509.08 762.45 454.85 600.24 405.97 587.78 457.31" />
            <rect
              className={`cls-14 clickable selectable ${getSelectionStatus(MapSelection.EAT)}`}
              x="365.42"
              y="124.41"
              width="31.24"
              height="20.82"
              transform="translate(-23.15 134.58) rotate(-19.45)"
              onClick={() =>
                openBackdrop(
                  'Eat diner (salle b105)',
                  "jusqu'à 2h30",
                  "Club: ch'utt de vers (théâtre) et lalal'utt (chorale)",
                  'Karaoké',
                  'Vente de champagne et bieres',
                )
              }
            />
            <rect
              className={`cls-14 clickable selectable ${getSelectionStatus(MapSelection.EAT)}`}
              x="422.41"
              y="131.46"
              width="31.24"
              height="20.82"
              transform="translate(-16.53 68.54) rotate(-8.78)"
              onClick={() =>
                openBackdrop(
                  'Eat (salle c102)',
                  "jusqu'à 2h30",
                  'Club: Rutt (club de rugby)',
                  'Chamboule tout',
                  'Biere pong avec des lots à gagner',
                  'Vente de champagne et de bieres',
                )
              }
            />
            <rect
              className={`cls-14 clickable selectable ${getSelectionStatus(MapSelection.EAT)}`}
              x="217.81"
              y="286.67"
              width="31.24"
              height="20.82"
              transform="translate(106.68 -58.84) rotate(18.56)"
              onClick={() =>
                openBackdrop(
                  'Eat le garage',
                  "jusqu'à 4h",
                  "Association: UNG (association d'informatique et de technologie)",
                  'Activité pêche aux canards',
                  'Vente de bière et milkshake',
                )
              }
            />
            <rect
              className={`cls-14 clickable selectable ${getSelectionStatus(MapSelection.EAT)}`}
              x="294.87"
              y="436.45"
              width="31.24"
              height="20.82"
              onClick={() =>
                openBackdrop(
                  'Eat bar inter école',
                  "jusqu'à 4h",
                  'Tenu par les étudiants des ecoles partenaires',
                  'Vente de tous les type de bière',
                )
              }
            />
            <rect
              className={`cls-15 selectable ${getSelectionStatus(MapSelection.POSTE_SECOURS)}`}
              x="439.87"
              y="348.97"
              width="40.93"
              height="22.03"
              transform="translate(138.49 -127.78) rotate(18.56)"
            />
            <rect
              className={`cls-14 clickable selectable ${getSelectionStatus(MapSelection.EAT)}`}
              x="476.13"
              y="288.84"
              width="31.24"
              height="20.82"
              onClick={() =>
                openBackdrop(
                  'Eat',
                  "jusqu'à 4h",
                  "Faluche club des faluchards de l'utt, tradition estudiantine",
                  'Vente de bière',
                )
              }
            />
            <rect
              className={`cls-14 clickable selectable ${getSelectionStatus(MapSelection.EAT)}`}
              x="460.39"
              y="128.21"
              width="31.24"
              height="20.82"
              onClick={() =>
                openBackdrop(
                  'Eat route 86 (salle c104)',
                  "jusqu'à 2h30",
                  "Club: MM (branche matériaux et mécanique à l'utt)",
                  'Vente de champagne et de bières',
                )
              }
            />
            <ellipse
              className={`cls-16 selectable ${getSelectionStatus(MapSelection.SCENE)}`}
              cx="410.03"
              cy="415.46"
              rx="49.93"
              ry="16.82"
              transform="translate(-114.95 160.26) rotate(-19.45)"
            />
            <ellipse
              className={`cls-16 selectable ${getSelectionStatus(MapSelection.SCENE)}`}
              cx="554.92"
              cy="284.68"
              rx="30.58"
              ry="10.3"
              transform="matrix(0.94, -0.33, 0.33, 0.94, -63.13, 201.04)"
            />
            <circle
              className={`cls-17 clickable selectable ${getSelectionStatus(MapSelection.PHOTO)}`}
              cx="141.13"
              cy="348.44"
              r="9.5"
              onClick={() =>
                openBackdrop('Stand photo', 'de 22h15 à 2h', 'Photo papier imprimée en direct (1€ la photo, 2€ les 3)')
              }
            />
            <circle
              className={`cls-17 selectable ${getSelectionStatus(MapSelection.SUMO)}`}
              cx="376.93"
              cy="258.71"
              r="16.43"
            />
            <circle
              className={`cls-18 selectable ${getSelectionStatus(MapSelection.RECHARGEMENT)}`}
              cx="163.92"
              cy="341.39"
              r="9.5"
            />
            <circle
              className={`cls-19 clickable selectable ${getSelectionStatus(MapSelection.SOFT_BAR)}`}
              cx="205.16"
              cy="210.06"
              r="9.5"
              onClick={() =>
                openBackdrop('Bar à softs', 'toute la soirée', 'Eau, soft et cocktail soft gratuit', 'Ethylotests')
              }
            />
            <circle
              className={`cls-20 clickable selectable ${getSelectionStatus(MapSelection.SAFE_PLACE)}`}
              cx="494.96"
              cy="370.34"
              r="9.5"
              onClick={() =>
                openBackdrop(
                  'Safe place',
                  null,
                  "Endroit dans lequel vous pourrez vous poser en cas de problème vss, de harcelement ou de sentiment d'insécurité",
                )
              }
            />
            <circle
              className={`cls-18 selectable ${getSelectionStatus(MapSelection.RECHARGEMENT)}`}
              cx="315.87"
              cy="166.1"
              r="9.5"
            />
            <circle
              className={`cls-18 selectable ${getSelectionStatus(MapSelection.RECHARGEMENT)}`}
              cx="419.52"
              cy="319.14"
              r="9.5"
            />
            <rect
              className={`cls-19 clickable selectable ${getSelectionStatus(MapSelection.RESTAURANT)}`}
              x="179.39"
              y="328.09"
              width="30.93"
              height="13.02"
              transform="translate(579.32 288.65) rotate(113.4)"
              onClick={() =>
                openBackdrop(
                  'L’atelier Lahmacun',
                  "jusqu'à 3h",
                  'Cuisine Turque:',
                  'Borek (bœuf/pomme de terre/bœuf, pomme de terre) : 5€',
                  'Portion de frite + sauces 4€',
                  'Borek + frites + sauce 8€',
                )
              }
            />
            <rect
              className={`cls-19 clickable selectable ${getSelectionStatus(MapSelection.RESTAURANT)}`}
              x="417.62"
              y="282.51"
              width="30.93"
              height="13.02"
              transform="translate(117.35 -125) rotate(18.95)"
              onClick={() =>
                openBackdrop(
                  'La crep d’élo',
                  "jusqu'à 3h",
                  'Crêpes:',
                  'Crêpe sucre 2€',
                  'Crêpe confiture fraise 2,5€',
                  'Crêpe Nutella 3€',
                )
              }
            />
            <rect
              className={`cls-19 clickable selectable ${getSelectionStatus(MapSelection.RESTAURANT)}`}
              x="508.8"
              y="162.03"
              width="30.93"
              height="13.02"
              transform="translate(48.81 -109.32) rotate(12.48)"
              onClick={() =>
                openBackdrop(
                  'Le saisonnier',
                  "jusqu'à 3h",
                  'Poutine et burgers:',
                  'Poutine Bœuf / Poutine Kebab 8.5€',
                  'Burger classique / burger raclette 8.5€ (+ frites 1€)',
                  'Portion de frites 1€',
                )
              }
            />
            <line className="cls-19" x1="67.86" y1="432.02" x2="87.13" y2="425.77" />
            <polygon className="cls-19" points="66.17 426.78 87.13 425.77 69.56 437.25 66.17 426.78 66.17 426.78" />
            <line className="cls-21" x1="-68.35" y1="477.06" x2="67.86" y2="432.02" />
            <g className="cls-22">
              <image width="162" height="126" transform="translate(57 166)" xlinkHref={mapEntry} />
            </g>
            <g className="cls-22">
              <image width="217" height="145" transform="translate(-86 118)" xlinkHref={mapEntry2} />
            </g>
            <rect
              className={`cls-17 selectable ${getSelectionStatus(MapSelection.VESTIAIRE)}`}
              x="415.95"
              y="109.57"
              width="77.41"
              height="11.82"
              transform="translate(-8.95 43.92) rotate(-5.48)"
            />
            <path d="M120.92,218l5.38,1.8-.24.71-4.5-1.51-1.19,3.56,4.15,1.39-.24.71-4.15-1.39-1.29,3.86,4.49,1.51-.23.71-5.38-1.81Z" />
            <path d="M127.07,223.84l.26.09a1.29,1.29,0,0,0,.58.11l-.49,1.46a2.51,2.51,0,0,1,2.87-.71,2,2,0,0,1,1.36,2.87l-1.38,4.11-.81-.28,1.34-4c.38-1.12,0-1.72-1-2.06a2.12,2.12,0,0,0-2.88,1.4l-1.16,3.44L125,230Z" />
            <path d="M133.63,230.32l1.08-3.21-1.27-.43.19-.56.49.16c.75.26,1-.05,1.23-.66l.37-1.1.13,0a1.4,1.4,0,0,0,.58.11l-.7,2.07,2.52.84-.21.64-2.52-.85-1.11,3.3c-.4,1.2,0,1.85.76,2.1a1.48,1.48,0,0,0,1.37-.18l.41.57a2,2,0,0,1-2,.29C133.66,233,133.1,231.9,133.63,230.32Z" />
            <path d="M139.77,228.1l.26.09a1.25,1.25,0,0,0,.57.11l-.49,1.47a2.07,2.07,0,0,1,2.46-.86,1.62,1.62,0,0,1,1.19,1.69l-.82.21c0-.73-.27-1.09-.84-1.28-1-.34-2,.19-2.44,1.56l-1.15,3.44-.81-.27Z" />
            <path d="M143.7,232.87a3.25,3.25,0,0,1,4-2.22c1.65.55,2.42,2.35,1.77,4.29l-5-1.69a2.46,2.46,0,0,0,1.55,3.19,2.14,2.14,0,0,0,2.41-.59l.49.54a2.84,2.84,0,0,1-3.12.72A3.31,3.31,0,0,1,143.7,232.87Zm1-.17,4.25,1.43a2.24,2.24,0,1,0-4.25-1.43Zm5.81-4.58.41.72-2.7,1.12-.52-.17Z" />
            <path d="M150.93,235.29a3.25,3.25,0,0,1,4-2.21c1.65.55,2.42,2.35,1.77,4.29l-5-1.69a2.46,2.46,0,0,0,1.55,3.19,2.14,2.14,0,0,0,2.41-.59l.49.53a2.85,2.85,0,0,1-3.12.73A3.32,3.32,0,0,1,150.93,235.29Zm1-.16,4.25,1.43a2.24,2.24,0,1,0-4.25-1.43Z" />
            <path d="M29.47,188.67,34,190.19l-.22.65L30,189.57l-1.12,3.37,3,1-.22.66-3-1-1.4,4.17-.74-.25Z" />
            <path d="M34.47,191.6a.56.56,0,0,1,.7-.39.55.55,0,0,1,.33.73.54.54,0,1,1-1-.34ZM34,193.66l.22.08a1.07,1.07,0,0,0,.49.09l-1.94,5.77-.68-.23Z" />
            <path d="M37.68,191.42l.22.08a1,1,0,0,0,.48.08l-3,8.91-.68-.22Z" />
            <path d="M37.86,198.16A2.91,2.91,0,0,1,41.35,196c1.39.46,2,2.09,1.39,3.89l-4.23-1.42a2.18,2.18,0,0,0,1.23,2.89,1.8,1.8,0,0,0,2.06-.61l.41.48a2.37,2.37,0,0,1-2.67.74A2.93,2.93,0,0,1,37.86,198.16Zm.82-.17,3.57,1.2a1.9,1.9,0,1,0-3.57-1.2Z" />
            <path d="M46.44,201a2.93,2.93,0,0,1,3.45-2.14,2.29,2.29,0,0,1,1.47,2.28l1.56-4.63.22.07a.93.93,0,0,0,.48.09l-3,8.91-.68-.23.51-1.5a2.3,2.3,0,0,1-2.56.93A2.93,2.93,0,0,1,46.44,201Zm4.48,1.5a2,2,0,1,0-2.65,1.69A2.23,2.23,0,0,0,50.92,202.53Z" />
            <path d="M54.26,199.81a1.32,1.32,0,0,0,1.66-.88,1,1,0,0,0,.06-.39.48.48,0,0,1-.35,0,.53.53,0,0,1-.3-.7.54.54,0,0,1,.69-.38c.45.15.61.77.36,1.51a1.75,1.75,0,0,1-2.2,1.23Z" />
            <path d="M55.5,205.69c.4-1.18,1.5-1.21,2.77-.93,1,.22,1.34.21,1.58-.5a1.13,1.13,0,0,0-.84-1.62,1.57,1.57,0,0,0-1.79.35l-.38-.47a2.2,2.2,0,0,1,2.47-.47,1.79,1.79,0,0,1,1.17,2.59l-1.29,3.84-.67-.22.36-1.07a1.91,1.91,0,0,1-2.23.56A1.54,1.54,0,0,1,55.5,205.69Zm3.76.33.3-.89c-.31.32-.66.32-1.37.17-1-.21-1.74-.23-2,.56-.21.62.05,1.13.79,1.38A1.69,1.69,0,0,0,59.26,206Z" />
            <path d="M62.09,207.07l1-3L62,203.74l.18-.53.41.14c.63.21.88-.08,1.07-.64l.34-1,.11,0a1,1,0,0,0,.49.09L64,203.73l2.12.71-.2.59-2.12-.71-1,3.06c-.37,1.11,0,1.7.59,1.91a1.17,1.17,0,0,0,1.16-.21l.34.52a1.67,1.67,0,0,1-1.71.32C62,209.56,61.59,208.53,62.09,207.07Z" />
            <path d="M66.38,208.51l1-3-1.07-.36.18-.53.41.14c.64.21.88-.08,1.07-.64l.34-1,.11,0a1,1,0,0,0,.49.09l-.65,1.91,2.12.71-.2.59-2.12-.71-1,3.06c-.37,1.11,0,1.7.59,1.91a1.17,1.17,0,0,0,1.16-.21l.34.52a1.67,1.67,0,0,1-1.71.32C66.33,211,65.89,210,66.38,208.51Z" />
            <path d="M70.28,209.05a2.9,2.9,0,0,1,3.49-2.14c1.39.46,2,2.1,1.39,3.89l-4.24-1.42a2.19,2.19,0,0,0,1.24,2.89,1.8,1.8,0,0,0,2.06-.61l.4.48a2.39,2.39,0,0,1-2.67.75A2.94,2.94,0,0,1,70.28,209.05Zm.82-.18,3.57,1.2a2.05,2.05,0,0,0-1.12-2.59A2,2,0,0,0,71.1,208.87Z" />
            <path d="M77.72,208.35l.22.08a.9.9,0,0,0,.48.08L78,209.87a2.12,2.12,0,0,1,2.46-.73c1.12.38,1.53,1.26,1.08,2.6l-1.28,3.81-.68-.23,1.24-3.71c.35-1,.09-1.59-.75-1.87a1.86,1.86,0,0,0-2.48,1.36l-1.07,3.19-.68-.23Z" />
            <path d="M83.12,214.13l1-3-1.07-.36.18-.52.41.13c.63.22.88-.07,1.07-.64l.34-1,.11,0a1,1,0,0,0,.48.09L85,210.8l2.12.71-.2.59-2.12-.71-1,3.05c-.37,1.11,0,1.7.59,1.91a1.19,1.19,0,0,0,1.16-.2l.34.51a1.67,1.67,0,0,1-1.71.32C83.07,216.62,82.63,215.59,83.12,214.13Z" />
            <path d="M87,214.67a2.9,2.9,0,0,1,3.49-2.14c1.39.46,2,2.1,1.38,3.89L87.67,215a2.19,2.19,0,0,0,1.24,2.89,1.79,1.79,0,0,0,2-.6l.41.47a2.39,2.39,0,0,1-2.67.75A2.94,2.94,0,0,1,87,214.67Zm.81-.18,3.58,1.2a1.9,1.9,0,1,0-3.58-1.2Z" />
            <path d="M428.28,113.28l.86-.08,3.54,7.46,2.06-8,.81-.08-2.39,9-.81.08Z" />
            <path d="M436.36,118.45a2.82,2.82,0,0,1,2.42-3.18,2.76,2.76,0,0,1,2.9,2.77l-4.57.44a2.13,2.13,0,0,0,2.35,2,1.85,1.85,0,0,0,1.69-1.32l.58.25a2.45,2.45,0,0,1-2.21,1.67A2.87,2.87,0,0,1,436.36,118.45Zm.7-.47,3.87-.37a1.94,1.94,0,1,0-3.87.37Z" />
            <path d="M443,119.83l.38-.51a2.13,2.13,0,0,0,1.88.61c.93-.09,1.49-.5,1.42-1.19,0-.46-.33-.71-1.21-.78l-.94-.08c-1-.1-1.53-.59-1.6-1.34-.09-1,.74-1.74,2-1.86a2.21,2.21,0,0,1,2.05.75l-.39.49a1.81,1.81,0,0,0-1.68-.65c-.79.08-1.31.48-1.24,1.19,0,.49.35.75,1.16.82l.87.08c1,.08,1.64.5,1.72,1.29.1,1-.78,1.73-2.13,1.86A2.55,2.55,0,0,1,443,119.83Z" />
            <path d="M449.2,117.9l-.28-2.91-1.15.11,0-.51.44,0c.69-.06.8-.4.75-1l-.1-1h.12a1.1,1.1,0,0,0,.49-.11l.18,1.88,2.29-.22.06.58-2.29.22.29,3c.1,1.09.65,1.47,1.34,1.4a1.27,1.27,0,0,0,1-.63l.54.31a1.8,1.8,0,0,1-1.49.94C450.18,120,449.34,119.34,449.2,117.9Z" />
            <path d="M452.9,112a.56.56,0,1,1,.6.5A.54.54,0,0,1,452.9,112Zm.37,2,.24,0a1.1,1.1,0,0,0,.49-.11l.54,5.66-.73.08Z" />
            <path d="M456.11,118c-.11-1.16.92-1.62,2.23-1.88,1-.2,1.35-.34,1.28-1s-.53-1.15-1.45-1.06a1.64,1.64,0,0,0-1.55,1l-.56-.25a2.33,2.33,0,0,1,2.14-1.36,1.75,1.75,0,0,1,2.17,1.74l.36,3.77L460,119l-.1-1a2,2,0,0,1-1.87,1.35C456.93,119.39,456.2,118.92,456.11,118Zm3.68-1.19-.09-.87c-.16.39-.49.52-1.22.67-1,.21-1.73.49-1.66,1.26.06.61.52.94,1.32.86A1.66,1.66,0,0,0,459.79,116.8Z" />
            <path d="M461.94,111.17a.56.56,0,0,1,1.12-.11.56.56,0,0,1-.52.61A.54.54,0,0,1,461.94,111.17Zm.37,2,.24,0A1.07,1.07,0,0,0,463,113l.54,5.67-.73.07Z" />
            <path d="M465.19,112.84l.24,0a1.06,1.06,0,0,0,.49-.11l.13,1.34a1.78,1.78,0,0,1,1.64-1.55,1.39,1.39,0,0,1,1.53.91l-.56.45c-.3-.55-.61-.76-1.12-.71-.91.09-1.5.85-1.38,2.09l.3,3.13-.73.07Z" />
            <path d="M470,115.22a2.81,2.81,0,0,1,2.41-3.17,2.76,2.76,0,0,1,2.91,2.77l-4.57.44a2.12,2.12,0,0,0,2.35,2,1.85,1.85,0,0,0,1.69-1.31l.58.25a2.48,2.48,0,0,1-2.22,1.67A2.86,2.86,0,0,1,470,115.22Zm.7-.46,3.86-.37a1.94,1.94,0,1,0-3.86.37Z" />
            <rect
              className={`cls-23 clickable selectable ${getSelectionStatus(MapSelection.EAT)}`}
              x="122.82"
              y="262.66"
              width="34.78"
              height="58.07"
              transform="translate(100.12 -29.45) rotate(18.56)"
              onClick={() =>
                openBackdrop(
                  'Pot VIP/EAT (salle M104)',
                  'de 21h à 23h uniquement sur invitation puis pour tous de 23h jusqu’à 2h30',
                  "Association : Genius (association d'innovation et d'entrepreneuriat)",
                  'Vente de champagne et bière',
                )
              }
            />
            <path d="M131,307.53l.54-1.55c.62-1.8,1.72-2.57,3-2.11s1.68,1.72,1,3.52l-.31.9,3,1-.23.65Zm.75-.48,3.05,1.06.32-.93c.48-1.4.24-2.27-.79-2.63s-1.78.18-2.26,1.58Z" />
            <path d="M137.62,304a2.43,2.43,0,1,1,3.18-1.47A2.51,2.51,0,0,1,137.62,304Zm1.38-4a1.79,1.79,0,1,0,1.28,2.33A1.85,1.85,0,0,0,139,300.05Z" />
            <path d="M140.32,298.09l-2.39-.83-.33.95-.42-.15.13-.37c.19-.56,0-.77-.49-.92l-.82-.29,0-.1a.87.87,0,0,0,.08-.42l1.54.53.65-1.87.48.16-.65,1.87,2.45.86c.9.31,1.39,0,1.58-.56a1.09,1.09,0,0,0-.13-1l.44-.31a1.56,1.56,0,0,1,.2,1.51A1.66,1.66,0,0,1,140.32,298.09Z" />
            <path d="M136.69,291.15l.25-.7,7.12-.1-5.53-4.49.23-.67,6.19,5.1-.23.67Z" />
            <path d="M139.14,284.09l.23-.66,7.1,2.47-.22.66Z" />
            <path d="M140,281.5l.54-1.56c.62-1.8,1.72-2.56,3-2.11s1.68,1.73,1.06,3.53l-.31.89,3,1.05-.22.66Zm.74-.48,3.05,1.05.32-.92c.49-1.4.25-2.27-.79-2.63s-1.77.17-2.26,1.57Z" />
            <image width="1756" height="578" transform="translate(192) scale(0.15)" xlinkHref={mapLogo} />
            <rect className="cls-24" x="337.14" y="486" width="316.63" height="166.79" rx="12" />
            <rect className="cls-25" x="337.14" y="486" width="316.63" height="166.79" rx="12" />
            <g className="cls-26">
              <g className="cls-27">
                <rect x="337.14" y="486" width="316.63" height="166.79" rx="12" />
                <rect className="cls-28" x="337.14" y="486" width="316.63" height="166.79" rx="12" />
              </g>
            </g>
            <rect
              className={`cls-14 clickable selectable ${getSelectionStatus(MapSelection.EAT)}`}
              x="529.6"
              y="500.98"
              width="30.57"
              height="17.59"
              onClick={() => toggleSelection(MapSelection.EAT)}
            />
            <rect
              className={`cls-15 clickable selectable ${getSelectionStatus(MapSelection.POSTE_SECOURS)}`}
              x="357.74"
              y="565.91"
              width="30.81"
              height="16.58"
              onClick={() => toggleSelection(MapSelection.POSTE_SECOURS)}
            />
            <ellipse
              className={`cls-16 clickable selectable ${getSelectionStatus(MapSelection.SCENE)}`}
              cx="373.14"
              cy="553.07"
              rx="20.25"
              ry="7.76"
              onClick={() => toggleSelection(MapSelection.SCENE)}
            />
            <circle
              className={`cls-17 clickable selectable ${getSelectionStatus(MapSelection.PHOTO)}`}
              cx="544.89"
              cy="593.14"
              r="9.29"
              onClick={() => toggleSelection(MapSelection.PHOTO)}
            />
            <circle
              className={`cls-17 clickable selectable ${getSelectionStatus(MapSelection.SUMO)}`}
              cx="544.89"
              cy="626.5"
              r="16.08"
              onClick={() => toggleSelection(MapSelection.SUMO)}
            />
            <circle
              className={`cls-18 clickable selectable ${getSelectionStatus(MapSelection.RECHARGEMENT)}`}
              cx="373.14"
              cy="594.62"
              r="7.15"
              onClick={() => toggleSelection(MapSelection.RECHARGEMENT)}
            />
            <circle
              className={`cls-19 clickable selectable ${getSelectionStatus(MapSelection.SOFT_BAR)}`}
              cx="544.89"
              cy="531.22"
              r="9.29"
              onClick={() => toggleSelection(MapSelection.SOFT_BAR)}
            />
            <rect
              className={`cls-19 clickable selectable ${getSelectionStatus(MapSelection.RESTAURANT)}`}
              x="529.75"
              y="565.73"
              width="30.27"
              height="12.75"
              transform="translate(1089.78 1144.21) rotate(180)"
              onClick={() => toggleSelection(MapSelection.RESTAURANT)}
            />
            <line className="cls-19" x1="388.5" y1="508.72" x2="393.55" y2="508.81" />
            <polygon
              className="cls-19"
              points="388.59 503.23 393.55 508.81 388.42 514.22 388.59 503.23 388.59 503.23"
            />
            <line className="cls-21" x1="352.74" y1="508.67" x2="388.5" y2="508.72" />
            <polyline className="cls-5" points="392.26 531.57 392.26 537.57 386.26 537.57" />
            <line className="cls-29" x1="377.52" y1="537.57" x2="364.4" y2="537.57" />
            <polyline className="cls-5" points="360.03 537.57 354.03 537.57 354.03 531.57" />
            <polyline className="cls-5" points="354.03 530.48 354.03 524.48 360.03 524.48" />
            <line className="cls-29" x1="368.77" y1="524.48" x2="381.89" y2="524.48" />
            <polyline className="cls-5" points="386.26 524.48 392.26 524.48 392.26 530.48" />
            <text className="cls-30" transform="translate(399.43 512.41)">
              <tspan className="cls-31" x="0" y="0">
                Accès Pompier
              </tspan>
              <tspan x="0" y="21.6">
                Barriérage
              </tspan>
              <tspan x="0" y="43.2">
                Scènes
              </tspan>
              <tspan className="cls-32" x="0" y="64.8">
                Postes de secours
              </tspan>
              <tspan className="cls-35" x="0" y="86.4">
                Rechargement
              </tspan>
              <tspan x="0" y="108">
                Safe Place
              </tspan>
            </text>
            <text className="cls-30" transform="translate(566.9 513.09)">
              <tspan className="cls-37" x="0" y="0">
                Bar / EAT
              </tspan>
              <tspan x="0" y="21.6">
                Bar à Soft
              </tspan>
              <tspan className="cls-32" x="0" y="43.2">
                Pot VIP / Bar
              </tspan>
              <tspan className="cls-35" x="0" y="62">
                Restauration
              </tspan>
              <tspan x="0" y="84">
                Stand Photo
              </tspan>
              <tspan x="0" y="116">
                Animation Sumo
              </tspan>
            </text>
            <rect
              className={`cls-23 clickable selectable ${getSelectionStatus(MapSelection.EAT)}`}
              x="537.03"
              y="539.57"
              width="15.97"
              height="26.66"
              transform="translate(1097.92 7.89) rotate(90)"
              onClick={() => toggleSelection(MapSelection.EAT)}
            />
            <path
              className={`cls-17 clickable selectable ${getSelectionStatus(MapSelection.SAFE_PLACE)}`}
              d="M372.94,622.12a6.49,6.49,0,1,1,6.49-6.49A6.49,6.49,0,0,1,372.94,622.12Z"
              onClick={() => toggleSelection(MapSelection.SAFE_PLACE)}
            />
            <path
              className={`cls-14 clickable selectable ${getSelectionStatus(MapSelection.SAFE_PLACE)}`}
              d="M372.94,610.65a5,5,0,1,1-5,5,5,5,0,0,1,5-5m0-3a8,8,0,1,0,8,8,8,8,0,0,0-8-8Z"
              onClick={() => toggleSelection(MapSelection.SAFE_PLACE)}
            />
          </g>
        </g>
      </svg>

      <div className={`backdrop ${backdropContent != null ? ' displayed' : ''}`} ref={backdropRef}>
        <div
          className="block"
          onTouchStart={(event) => (event.touches.length < 2 ? startDragBackDrop(event.touches.item(0).clientY) : null)}
          onTouchEnd={(event) =>
            event.touches.length < 2
              ? endDragBackDrop(event.changedTouches.item(0).clientY)
              : endDragBackDrop(handlingStartY ?? 0)
          }
          onTouchCancel={(event) =>
            event.touches.length < 2
              ? endDragBackDrop(event.changedTouches.item(0).clientY)
              : endDragBackDrop(handlingStartY ?? 0)
          }
          onTouchMove={(event) =>
            event.touches.length < 2
              ? moveDragBackDrop(event.changedTouches.item(0).clientY)
              : endDragBackDrop(handlingStartY ?? 0)
          }>
          {backdropContent}
          <div className="drag-indicator" />
        </div>
        <div className="background" onClick={() => openBackdrop(null)} />
      </div>
      <div className="caption">Clique sur les éléments du plan pour en savoir plus</div>
    </>
  );
}

export default Map;
