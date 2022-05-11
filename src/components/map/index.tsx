import React, { useEffect, useState } from 'react';

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
}

function Map() {
  const backdropRef = React.createRef<HTMLDivElement>();
  const [backdropContent, setBackdropContent] = useState<JSX.Element | null>(null);
  const [selection, setSelection] = useState<MapSelection | null>(null);
  const [posX, setPosX] = useState<number>(0);
  const [posY, setPosY] = useState<number>(0);

  const updatePosition = (x: number, y: number) => {
    // Entrance: 48.27018346874385,4.065467119216919 -> 300,95
    // Otherside: 48.26849028741819,4.069109559059143 -> 1240,390
    const dx = x - 4.065467119216919;
    const dy = y - 48.27018346874385;
    setPosY(Math.min(Math.max(24, (dy / (48.26849028741819 - 48.27018346874385)) * (390 - 95) + 95), 668));
    setPosX(Math.min(Math.max(12, (dx / (4.069109559059143 - 4.065467119216919)) * (1240 - 300) + 200), 1200 - 12));
  };

  const toggleSelection = (selectionUpdate: MapSelection) => {
    setSelection(selectionUpdate === selection ? null : selectionUpdate);
  };

  const getSelectionStatus = (target: MapSelection) => {
    if (selection === target) return 'selected';
    if (selection !== null) return 'unselected';
    return '';
  };

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      (pos) => updatePosition(pos.coords.longitude, pos.coords.latitude),
      () => updatePosition(0, 0),
      {
        enableHighAccuracy: true,
      },
    );
    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  let handlingBackdrop = false;
  let handlingStartY: number | null = null;

  const openBackdrop = (title: string | null, ...content: string[]) => {
    setBackdropContent(
      title == null && content.length === 0 ? null : (
        <>
          {title && <div className="backdrop-title">{title}</div>}
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
      <svg className="map" xmlns="http://www.w3.org/2000/svg" viewBox="100 0 1200 668">
        <defs>
          <linearGradient
            id="Dégradé_sans_nom_14"
            x1="759.15"
            y1="-47.23"
            x2="759.15"
            y2="1099"
            gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#771617" />
            <stop offset="0.23" stopColor="#9b3e17" />
            <stop offset="0.59" stopColor="#cc7518" />
            <stop offset="0.86" stopColor="#eb9718" />
            <stop offset="1" stopColor="#f7a418" />
          </linearGradient>
          <filter id="luminosity-invert" filterUnits="objectBoundingBox" colorInterpolationFilters="sRGB">
            <feColorMatrix values="-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0" />
          </filter>
          <mask id="mask" x="1063" y="392" width="476" height="255" maskUnits="userSpaceOnUse">
            <g className="cls-40">
              <image width="476" height="255" transform="translate(1063 392)" xlinkHref={mapVignette} />
            </g>
          </mask>
        </defs>
        <g className="cls-1">
          <g id="Calque_1" data-name="Calque 1">
            <rect className="cls-2 background" x="-68.7" y="-47.23" width="1655.7" height="1146.23" />
            <rect className="cls-3 background" x="-68.7" y="-47.23" width="1655.7" height="1146.23" />
            <image
              xmlns="http://www.w3.org/2000/svg"
              width="2087"
              height="838"
              transform="translate(-263 -58)"
              href={mapGradient}
            />
            <path
              xmlns="http://www.w3.org/2000/svg"
              className="cls-4"
              d="M857.34,155l3.42-59.77C826.81,94,790.4,97.4,753,105.58l11.62,57.88C797.32,156.32,828.75,153.54,857.34,155Z"
            />
            <path
              xmlns="http://www.w3.org/2000/svg"
              className="cls-4"
              d="M752.57,166.25l-8.89-58.54A542.16,542.16,0,0,0,636.27,146L660,199.84A483.16,483.16,0,0,1,752.57,166.25Z"
            />
            <path
              xmlns="http://www.w3.org/2000/svg"
              className="cls-4"
              d="M712,525.64l9,62A543.84,543.84,0,0,0,828.12,549l-27.65-56.06A485.23,485.23,0,0,1,712,525.64Z"
            />
            <path
              xmlns="http://www.w3.org/2000/svg"
              className="cls-4"
              d="M981.19,125.08c-29.7-16.17-65.82-25.93-105.82-29l-5.92,59.83c37.45,3.61,69.31,14.93,91.85,33.71Z"
            />
            <path
              xmlns="http://www.w3.org/2000/svg"
              className="cls-4"
              d="M472.5,470.75a95.89,95.89,0,0,1-8.33-26.9L399.35,417c-3.28,29.78.87,58.5,13.46,84.59S445.45,549,471,564.94l21.4-66.84A96.59,96.59,0,0,1,472.5,470.75Z"
            />
            <path
              xmlns="http://www.w3.org/2000/svg"
              className="cls-4"
              d="M469.85,472.72a85.71,85.71,0,0,1-7.52-24.27l-58.48-24.24c-3,26.88.78,52.8,12.14,76.33s29.45,42.75,52.46,57.17l19.32-60.31A86.64,86.64,0,0,1,469.85,472.72Z"
            />
            <path className="cls-5" d="M463.45,454.34c-.44-1.94-.81-3.91-1.12-5.89l-5.54-2.3" />
            <line className="cls-6" x1="447.31" y1="442.22" x2="414.13" y2="428.48" />
            <path className="cls-5" d="M409.39,426.51l-5.54-2.3c-.22,2-.41,4-.55,6" />
            <path
              className="cls-7"
              d="M402.87,441.33A134.35,134.35,0,0,0,416,500.54c9.76,20.24,24.41,37.17,42.87,50.68"
            />
            <path className="cls-5" d="M463.42,554.43q2.47,1.68,5,3.28l1.83-5.72" />
            <line className="cls-8" x1="473.41" y1="542.22" x2="484.37" y2="508" />
            <path className="cls-5" d="M485.94,503.12l1.83-5.72q-2.17-2.1-4.17-4.31" />
            <path className="cls-9" d="M474.68,481.4a85.29,85.29,0,0,1-9.31-19.95" />
            <path
              className="cls-4"
              d="M608.35,538.37l-4.72,62.41c34,1,70.33-2.54,107.71-10.87l-12.45-61.08C667.06,536.06,636.42,539.21,608.35,538.37Z"
            />
            <path
              className="cls-4"
              d="M480.92,570.77c30.75,16.77,68.39,26.68,110.11,29.41L595,537.65c-35.9-2.81-66.93-12.55-89.91-29Z"
            />
            <polygon className="cls-4" points="260.83 232.45 235.36 310.22 368.77 353.12 394.92 274.02 260.83 232.45" />
            <path
              className="cls-4"
              d="M1059.37,329a100.41,100.41,0,0,1-15.07,2.69l-8.93,15.39H971.46a287.54,287.54,0,0,1-33,44.63L560.89,263.14a468.94,468.94,0,0,1,83.7-55.57l-27.58-52a535.46,535.46,0,0,0-85.78,55.87l12.52-41.38-77.1-23.46-3.35,14.75h-5.37l-11.39,34.19,5.36,1.34-4,10.73-28.83-10.06,16.76-59-57-18.77-18.78,59L346,174.12l18.77-59.66L303,96.05l-24.07,79.42,162.91,50.95-4.11,12.07L274.42,187.38l-9.56,31L462,280.08q-5.35,6.68-10.3,13.45l-47.31-14.82-3.49,12.59h-5.94l-16.76,55.79h6.16l-3.08,9.05,30.3,10.61a219.42,219.42,0,0,0-10.68,39.55L462.93,427c.17-38.1,19.63-80.45,53.78-120.42L568.54,324a61,61,0,1,0,111.23,37.28l209.91,70.33,3.07,3.4a472.64,472.64,0,0,1-76.85,50.18l28,55.93c65.87-34.35,120-79.1,158.15-127.32l.28-.29,0,0a339.57,339.57,0,0,0,33.9-51.67L1074,378.6,1064,417l35.62,10,12.63-33.65,70.39,18.1-10.1,32.63,40.27,11.62,30.59-65.4Z"
            />
            <path
              className="cls-4"
              d="M981.48,328.14l58.69-2.85a3.28,3.28,0,0,1,.91-.13,61.21,61.21,0,0,0,11.63-1.5c15.54-45.48,15.57-90.33-3.24-129.31-11.67-24.17-29.61-44.08-52.36-59.57L972.17,200a95.8,95.8,0,0,1,15,22.34C1002.19,253.44,999.07,290.45,981.48,328.14Z"
            />
            <path
              className="cls-4"
              d="M989.14,324l50.13-2.65a2.71,2.71,0,0,1,.78-.13,47.53,47.53,0,0,0,9.93-1.39c13.28-42.33,13.3-84.08-2.77-120.35A138.26,138.26,0,0,0,1002.49,144l-21.3,60.74A89.67,89.67,0,0,1,994,225.52C1006.83,254.43,1004.16,288.88,989.14,324Z"
            />
            <path className="cls-5" d="M991.41,318.41q-1.08,2.77-2.27,5.55l6-.32" />
            <line className="cls-10" x1="1004.92" y1="323.12" x2="1039.21" y2="321.31" />
            <path className="cls-5" d="M1044.09,320.88a59.21,59.21,0,0,0,5.89-1.09c.6-1.92,1.18-3.83,1.73-5.75" />
            <path
              className="cls-11"
              d="M1054.74,302.22c8.21-36.24,6.31-71.54-7.53-102.78a136.81,136.81,0,0,0-35.3-47.85"
            />
            <path className="cls-5" d="M1007.23,147.66q-2.33-1.87-4.74-3.67l-2,5.66" />
            <line className="cls-12" x1="997.04" y1="159.54" x2="984.9" y2="194.12" />
            <path className="cls-5" d="M983.17,199.06l-2,5.67q1.9,2.31,3.66,4.75" />
            <path className="cls-13" d="M991.48,220.25c.9,1.72,1.75,3.47,2.54,5.27,11.41,25.75,10.54,55.89-.4,87" />
            <polygon
              className="cls-4"
              points="972.17 531.86 1174.6 595.81 1187.94 528.83 987.55 468.43 972.17 531.86"
            />
            {posX && posY && (
              <path
                className="youhere"
                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                transform={`translate(${100 + posX - 12} ${posY - 24})`}
              />
            )}
            <rect
              className={`cls-14 clickable selectable ${getSelectionStatus(MapSelection.EAT)}`}
              x="697.48"
              y="120.61"
              width="38.59"
              height="25.72"
              transform="translate(-3.54 246.31) rotate(-19.45)"
              onClick={() => openBackdrop('EAT #1', 'Les détails de cet EAT seront bientôt disponibles')}
            />
            <rect
              className={`cls-14 clickable selectable ${getSelectionStatus(MapSelection.EAT)}`}
              x="767.87"
              y="129.33"
              width="38.59"
              height="25.72"
              transform="translate(-12.48 121.85) rotate(-8.78)"
              onClick={() => openBackdrop('EAT #2', 'Les détails de cet EAT seront bientôt disponibles')}
            />
            <rect
              className={`cls-14 clickable selectable ${getSelectionStatus(MapSelection.EAT)}`}
              x="515.12"
              y="321.06"
              width="38.59"
              height="25.72"
              transform="translate(134.05 -152.71) rotate(18.56)"
              onClick={() => openBackdrop('EAT #3', 'Les détails de cet EAT seront bientôt disponibles')}
            />
            <rect
              className={`cls-14 clickable selectable ${getSelectionStatus(MapSelection.EAT)}`}
              x="610.32"
              y="506.1"
              width="38.59"
              height="25.72"
              onClick={() => openBackdrop('EAT #4', 'Les détails de cet EAT seront bientôt disponibles')}
            />
            <rect
              className={`cls-15 selectable ${getSelectionStatus(MapSelection.POSTE_SECOURS)}`}
              x="789.44"
              y="398.02"
              width="50.57"
              height="27.21"
              transform="translate(173.34 -237.87) rotate(18.56)"
            />
            <rect
              className={`cls-14 clickable selectable ${getSelectionStatus(MapSelection.EAT)}`}
              x="834.24"
              y="323.75"
              width="38.59"
              height="25.72"
              onClick={() => openBackdrop('EAT #5', 'Les détails de cet EAT seront bientôt disponibles')}
            />
            <rect
              className={`cls-14 clickable selectable ${getSelectionStatus(MapSelection.EAT)}`}
              x="814.8"
              y="125.31"
              width="38.59"
              height="25.72"
              onClick={() => openBackdrop('EAT #6', 'Les détails de cet EAT seront bientôt disponibles')}
            />
            <ellipse
              className={`cls-16 clickable selectable ${getSelectionStatus(MapSelection.SCENE)}`}
              cx="752.58"
              cy="480.17"
              rx="61.68"
              ry="20.78"
              transform="translate(-116.95 278.02) rotate(-19.45)"
              onClick={() => openBackdrop('Scène principale', 'Les détails de cet scène seront bientôt disponibles')}
            />
            <ellipse
              className={`cls-16 clickable selectable ${getSelectionStatus(MapSelection.SCENE)}`}
              cx="931.58"
              cy="318.6"
              rx="37.77"
              ry="12.73"
              transform="matrix(0.94, -0.33, 0.33, 0.94, -52.92, 328.41)"
              onClick={() => openBackdrop('Scène secondaire', 'Les détails de cette scène seront bientôt disponibles')}
            />
            <circle
              className={`cls-17 clickable selectable ${getSelectionStatus(MapSelection.PHOTO)}`}
              cx="420.39"
              cy="397.37"
              r="11.73"
              onClick={() => openBackdrop('Stand photo', 'Les détails de cette activité seront bientôt disponibles')}
            />
            <circle
              className={`cls-17 clickable selectable ${getSelectionStatus(MapSelection.SUMO)}`}
              cx="711.69"
              cy="286.52"
              r="20.3"
              onClick={() => openBackdrop('Stand sumo', 'Les détails de cette activité seront bientôt disponibles')}
            />
            <circle
              className={`cls-18 selectable ${getSelectionStatus(MapSelection.RECHARGEMENT)}`}
              cx="448.55"
              cy="388.66"
              r="11.73"
            />
            <circle
              className={`cls-19 clickable selectable ${getSelectionStatus(MapSelection.SOFT_BAR)}`}
              cx="499.5"
              cy="226.42"
              r="11.73"
              onClick={() => openBackdrop('Bar à softs', 'Les détails de ce bar seront bientôt disponibles')}
            />
            <circle
              className={`cls-18 selectable ${getSelectionStatus(MapSelection.RECHARGEMENT)}`}
              cx="636.26"
              cy="172.11"
              r="11.73"
            />
            <circle
              className={`cls-18 selectable ${getSelectionStatus(MapSelection.RECHARGEMENT)}`}
              cx="764.31"
              cy="361.17"
              r="11.73"
            />
            <rect
              className={`cls-19 clickable selectable ${getSelectionStatus(MapSelection.RESTAURANT)}`}
              x="467.65"
              y="372.23"
              width="38.21"
              height="16.09"
              transform="translate(1029.06 84.55) rotate(113.4)"
              onClick={() =>
                openBackdrop(
                  'Espace restauration #1',
                  'Les détails de cet espace restauration seront bientôt disponibles',
                )
              }
            />
            <rect
              className={`cls-19 clickable selectable ${getSelectionStatus(MapSelection.RESTAURANT)}`}
              x="761.96"
              y="315.92"
              width="38.21"
              height="16.09"
              transform="translate(147.57 -236.12) rotate(18.95)"
              onClick={() =>
                openBackdrop(
                  'Espace restauration #2',
                  'Les détails de cet espace restauration seront bientôt disponibles',
                )
              }
            />
            <rect
              className={`cls-19 clickable selectable ${getSelectionStatus(MapSelection.RESTAURANT)}`}
              x="874.59"
              y="167.09"
              width="38.21"
              height="16.09"
              transform="translate(58.97 -189.01) rotate(12.48)"
              onClick={() =>
                openBackdrop(
                  'Espace restauration #3',
                  'Les détails de cet espace restauration seront bientôt disponibles',
                )
              }
            />
            <line className="cls-19" x1="329.89" y1="500.61" x2="353.68" y2="492.9" />
            <polygon className="cls-19" points="328.19 495.38 353.69 492.9 331.58 505.85 328.19 495.38 328.19 495.38" />
            <line className="cls-20" x1="161.61" y1="556.26" x2="329.89" y2="500.61" />
            <g className="cls-21">
              <image width="183" height="138" transform="translate(325 181)" href={mapEntry} />
            </g>
            <g className="cls-21">
              <image width="250" height="161" transform="translate(149 122)" href={mapEntry2} />
            </g>
            <rect
              className={`cls-17 selectable ${getSelectionStatus(MapSelection.VESTIAIRE)}`}
              x="759.9"
              y="102.28"
              width="95.63"
              height="14.61"
              transform="translate(-6.77 77.59) rotate(-5.48)"
            />
            <path d="M395.43,236.24l6.64,2.23-.29.88-5.56-1.87-1.47,4.4,5.13,1.72-.3.87-5.12-1.72-1.61,4.77,5.56,1.87-.29.87L391.47,248Z" />
            <path d="M403,243.44l.32.11a1.56,1.56,0,0,0,.71.14l-.61,1.8a3.13,3.13,0,0,1,3.56-.87c1.64.55,2.27,1.76,1.67,3.54l-1.7,5.08-1-.34,1.66-5c.46-1.37.05-2.13-1.18-2.54a2.62,2.62,0,0,0-3.56,1.73l-1.43,4.25-1-.34Z" />
            <path d="M411.13,251.45l1.33-4-1.57-.53.24-.7.6.2c.93.32,1.28-.06,1.53-.81l.46-1.36.16.05a1.65,1.65,0,0,0,.71.14l-.86,2.55,3.11,1.05-.27.78-3.11-1-1.36,4.07c-.5,1.49,0,2.29.93,2.6a1.8,1.8,0,0,0,1.69-.23l.52.72a2.55,2.55,0,0,1-2.49.35C411.16,254.8,410.48,253.4,411.13,251.45Z" />
            <path d="M418.71,248.71l.32.11a1.53,1.53,0,0,0,.71.13l-.61,1.83a2.55,2.55,0,0,1,3-1.07,2,2,0,0,1,1.47,2.08l-1,.26c-.06-.89-.35-1.35-1-1.58-1.23-.41-2.45.23-3,1.93l-1.42,4.25-1-.33Z" />
            <path d="M423.57,254.59a4,4,0,0,1,5-2.73c2,.68,3,2.9,2.17,5.3l-6.21-2.09a3,3,0,0,0,1.91,3.94,2.63,2.63,0,0,0,3-.73l.61.66a3.5,3.5,0,0,1-3.85.9A4.09,4.09,0,0,1,423.57,254.59Zm1.18-.2,5.26,1.77a2.78,2.78,0,1,0-5.26-1.77Zm7.19-5.65.5.88L429.11,251l-.64-.22Z" />
            <path d="M432.5,257.59a4,4,0,0,1,5-2.74c2,.69,3,2.91,2.17,5.31l-6.21-2.09a3,3,0,0,0,1.91,3.94,2.63,2.63,0,0,0,3-.73l.62.66a3.52,3.52,0,0,1-3.86.89A4.09,4.09,0,0,1,432.5,257.59Zm1.19-.2,5.25,1.76a2.77,2.77,0,1,0-5.25-1.76Z" />
            <path d="M282.46,200l5.59,1.87-.27.81-4.68-1.57-1.39,4.16,3.66,1.23-.27.81-3.66-1.23-1.73,5.15-.92-.31Z" />
            <path d="M288.63,203.61a.68.68,0,1,1,.4.91A.69.69,0,0,1,288.63,203.61Zm-.62,2.56.27.09a1.32,1.32,0,0,0,.6.11l-2.4,7.13-.84-.28Z" />
            <path d="M292.6,203.4l.27.09a1.34,1.34,0,0,0,.6.11l-3.7,11-.84-.28Z" />
            <path d="M292.82,211.72c.68-2,2.59-3.22,4.32-2.64s2.45,2.6,1.71,4.81l-5.23-1.75a2.71,2.71,0,0,0,1.53,3.57,2.22,2.22,0,0,0,2.54-.75l.5.59a3,3,0,0,1-3.3.92A3.63,3.63,0,0,1,292.82,211.72Zm1-.21,4.42,1.48a2.34,2.34,0,1,0-4.42-1.48Z" />
            <path d="M303.42,215.26c.66-2,2.62-3.19,4.26-2.64a2.84,2.84,0,0,1,1.82,2.82l1.93-5.72.27.09a1.32,1.32,0,0,0,.59.11l-3.69,11-.84-.28.62-1.85a2.84,2.84,0,0,1-3.16,1.15C303.59,219.39,302.76,217.23,303.42,215.26Zm5.54,1.86a2.52,2.52,0,1,0-3.28,2.09A2.77,2.77,0,0,0,309,217.12Z" />
            <path d="M313.08,213.75a1.62,1.62,0,0,0,2.05-1.08,1.32,1.32,0,0,0,.08-.49.48.48,0,0,1-.43,0,.65.65,0,0,1-.38-.86.69.69,0,0,1,.86-.47c.55.19.75,1,.44,1.87a2.16,2.16,0,0,1-2.71,1.51Z" />
            <path d="M314.61,221c.49-1.46,1.86-1.5,3.43-1.15,1.23.26,1.65.25,1.95-.62a1.41,1.41,0,0,0-1-2,1.92,1.92,0,0,0-2.21.44l-.48-.58a2.73,2.73,0,0,1,3.05-.58c1.46.49,2,1.54,1.46,3.19l-1.6,4.75-.83-.27.45-1.33a2.36,2.36,0,0,1-2.76.7A1.9,1.9,0,0,1,314.61,221Zm4.65.4.36-1.1c-.38.39-.81.39-1.69.21-1.21-.26-2.14-.28-2.47.7-.25.76.07,1.38,1,1.69A2.08,2.08,0,0,0,319.26,221.43Z" />
            <path d="M322.75,222.73l1.23-3.68-1.32-.44.22-.65.51.17c.78.27,1.08-.09,1.31-.79l.43-1.25.13,0a1.34,1.34,0,0,0,.6.11l-.79,2.37,2.61.87-.25.73-2.61-.88-1.26,3.78c-.47,1.37-.06,2.1.72,2.36a1.5,1.5,0,0,0,1.44-.25l.42.64a2.09,2.09,0,0,1-2.12.39C322.69,225.8,322.14,224.53,322.75,222.73Z" />
            <path d="M328.05,224.51l1.23-3.68-1.32-.44.22-.65.51.17c.78.27,1.08-.09,1.31-.79l.43-1.26.13,0a1.34,1.34,0,0,0,.6.11l-.79,2.37,2.61.87-.25.73-2.61-.88-1.26,3.78c-.47,1.37-.06,2.1.72,2.36A1.5,1.5,0,0,0,331,227l.42.63a2.07,2.07,0,0,1-2.12.4C328,227.58,327.44,226.31,328.05,224.51Z" />
            <path d="M332.87,225.17c.68-2,2.59-3.22,4.31-2.64s2.46,2.59,1.71,4.81l-5.22-1.76a2.69,2.69,0,0,0,1.52,3.57,2.22,2.22,0,0,0,2.54-.75l.51.59a2.93,2.93,0,0,1-3.3.92A3.62,3.62,0,0,1,332.87,225.17Zm1-.22,4.41,1.48a2.34,2.34,0,1,0-4.41-1.48Z" />
            <path d="M342.06,224.31l.27.09a1.13,1.13,0,0,0,.6.11l-.56,1.67a2.62,2.62,0,0,1,3-.89c1.38.46,1.89,1.55,1.33,3.21l-1.58,4.7-.84-.28,1.54-4.59c.43-1.27.11-2-.93-2.3a2.32,2.32,0,0,0-3.07,1.68l-1.32,3.93-.84-.28Z" />
            <path d="M348.74,231.45l1.23-3.67-1.32-.45.22-.64.51.17c.78.26,1.08-.1,1.32-.79l.42-1.26.13.05a1.17,1.17,0,0,0,.6.1l-.79,2.37,2.61.88-.24.73-2.62-.88-1.26,3.77c-.46,1.38-.06,2.1.72,2.37a1.48,1.48,0,0,0,1.44-.26l.42.64A2.09,2.09,0,0,1,350,235C348.68,234.52,348.13,233.26,348.74,231.45Z" />
            <path d="M353.56,232.11c.68-2,2.59-3.22,4.31-2.64s2.46,2.59,1.71,4.81l-5.22-1.75a2.7,2.7,0,0,0,1.52,3.57,2.22,2.22,0,0,0,2.54-.75l.51.59a3,3,0,0,1-3.3.92A3.63,3.63,0,0,1,353.56,232.11Zm1-.21,4.41,1.48a2.34,2.34,0,1,0-4.41-1.48Z" />
            <path d="M775.13,106.86l1-.1,4.38,9.22,2.54-9.88,1-.1-3,11.1-1,.1Z" />
            <path d="M785.11,113.25a3.49,3.49,0,0,1,3-3.93c1.85-.18,3.38,1.25,3.58,3.43l-5.65.54a2.64,2.64,0,0,0,2.91,2.44A2.28,2.28,0,0,0,791,114.1l.72.31a3.08,3.08,0,0,1-2.74,2.07A3.55,3.55,0,0,1,785.11,113.25Zm.87-.58,4.77-.46a2.4,2.4,0,1,0-4.77.46Z" />
            <path d="M793.3,115l.49-.62a2.62,2.62,0,0,0,2.31.75c1.15-.11,1.84-.62,1.76-1.47-.05-.57-.41-.87-1.5-1l-1.16-.1c-1.2-.11-1.88-.72-2-1.64-.12-1.24.9-2.16,2.41-2.3a2.68,2.68,0,0,1,2.53.92l-.48.6a2.25,2.25,0,0,0-2.07-.8c-1,.1-1.62.6-1.53,1.48,0,.6.43.92,1.44,1l1.07.1c1.26.11,2,.62,2.12,1.6.12,1.25-1,2.14-2.63,2.3A3.2,3.2,0,0,1,793.3,115Z" />
            <path d="M801,112.58l-.34-3.61-1.43.14-.06-.63.55-.06c.84-.08,1-.5.92-1.18l-.12-1.24h.15a1.39,1.39,0,0,0,.61-.14l.22,2.32,2.82-.27.07.72-2.82.27.35,3.7c.13,1.35.81,1.8,1.66,1.72a1.57,1.57,0,0,0,1.25-.77l.66.38a2.21,2.21,0,0,1-1.84,1.16C802.18,115.21,801.14,114.35,801,112.58Z" />
            <path d="M805.54,105.32a.65.65,0,0,1,.61-.74.67.67,0,0,1,.77.61.68.68,0,0,1-.64.75A.66.66,0,0,1,805.54,105.32Zm.46,2.42.29,0a1.35,1.35,0,0,0,.61-.14l.67,7-.91.08Z" />
            <path d="M809.5,112.68c-.14-1.43,1.14-2,2.76-2.32,1.27-.25,1.67-.42,1.58-1.28s-.66-1.41-1.79-1.3a2,2,0,0,0-1.92,1.23l-.68-.31a2.87,2.87,0,0,1,2.64-1.68,2.16,2.16,0,0,1,2.68,2.15l.45,4.66-.9.09-.12-1.3a2.43,2.43,0,0,1-2.32,1.66C810.52,114.41,809.61,113.83,809.5,112.68Zm4.55-1.47-.11-1.07c-.2.48-.6.65-1.51.83-1.25.25-2.13.6-2,1.56.07.74.63,1.15,1.62,1A2,2,0,0,0,814.05,111.21Z" />
            <path d="M816.71,104.25a.65.65,0,0,1,.61-.74.67.67,0,0,1,.77.61.68.68,0,0,1-.64.75A.66.66,0,0,1,816.71,104.25Zm.46,2.42.29,0a1.39,1.39,0,0,0,.61-.14l.67,7-.91.08Z" />
            <path d="M820.72,106.33l.29,0a1.58,1.58,0,0,0,.61-.14l.16,1.65a2.21,2.21,0,0,1,2-1.91A1.72,1.72,0,0,1,825.7,107l-.7.56c-.36-.69-.74-1-1.37-.89-1.13.11-1.85,1-1.71,2.59l.37,3.86-.91.09Z" />
            <path d="M826.64,109.26a3.47,3.47,0,0,1,3-3.92c1.85-.18,3.38,1.25,3.59,3.43l-5.65.54a2.63,2.63,0,0,0,2.91,2.44,2.26,2.26,0,0,0,2.08-1.63l.72.31a3,3,0,0,1-2.73,2.06A3.53,3.53,0,0,1,826.64,109.26Zm.86-.57,4.78-.46a2.5,2.5,0,0,0-2.62-2.19A2.47,2.47,0,0,0,827.5,108.69Z" />
            <rect
              className={`cls-22 clickable selectable ${getSelectionStatus(MapSelection.EAT)}`}
              x="397.77"
              y="291.41"
              width="42.96"
              height="71.73"
              transform="translate(125.94 -116.41) rotate(18.56)"
              onClick={() => openBackdrop('Pot VIP/EAT #7', 'Les détails de cet EAT seront bientôt disponibles')}
            />
            <path d="M407.9,346.83l.66-1.92c.77-2.22,2.13-3.16,3.74-2.61s2.08,2.14,1.31,4.36l-.39,1.11,3.74,1.29-.28.81Zm.92-.59,3.76,1.3.4-1.14c.6-1.73.3-2.8-1-3.24s-2.19.21-2.78,1.94Z" />
            <path d="M416.06,342.5a3,3,0,1,1,3.92-1.81A3.1,3.1,0,0,1,416.06,342.5Zm1.7-4.91a2.21,2.21,0,1,0,1.59,2.88A2.29,2.29,0,0,0,417.76,337.59Z" />
            <path d="M419.39,335.16l-2.95-1-.41,1.17-.51-.18.15-.45c.24-.69,0-.95-.6-1.15l-1-.35,0-.12a1.17,1.17,0,0,0,.11-.53l1.9.66.81-2.31.58.2-.8,2.32,3,1.05c1.11.38,1.71,0,1.95-.68a1.36,1.36,0,0,0-.16-1.27l.54-.38a1.89,1.89,0,0,1,.25,1.86C421.9,335.17,420.84,335.67,419.39,335.16Z" />
            <path d="M414.91,326.59l.3-.86,8.81-.13-6.84-5.54.28-.83,7.66,6.31-.29.82Z" />
            <path d="M417.93,317.88l.29-.82,8.78,3.05-.28.81Z" />
            <path d="M419.05,314.67l.66-1.92c.77-2.22,2.13-3.17,3.74-2.61s2.07,2.14,1.3,4.36l-.38,1.1,3.74,1.3-.28.81Zm.92-.59,3.76,1.3.4-1.14c.6-1.73.3-2.8-1-3.25s-2.19.21-2.79,1.94Z" />
            <g className="caption">
              <rect className="cls-23" x="1068.91" y="397" width="465.09" height="245" rx="12" />
              <rect className="cls-24" x="1068.91" y="397" width="465.09" height="245" rx="12" />
              <g className="cls-25">
                <g className="cls-26">
                  <rect x="1068.91" y="397" width="465.09" height="245" rx="12" />
                  <rect className="cls-27" x="1068.91" y="397" width="465.09" height="245" rx="12" />
                </g>
              </g>
              <rect
                className={`cls-14 clickable selectable ${getSelectionStatus(MapSelection.EAT)}`}
                x="1351.62"
                y="419"
                width="44.91"
                height="25.85"
                onClick={() => toggleSelection(MapSelection.EAT)}
              />
              <rect
                className={`cls-15 clickable selectable ${getSelectionStatus(MapSelection.POSTE_SECOURS)}`}
                x="1099.17"
                y="514.38"
                width="45.26"
                height="24.35"
                onClick={() => toggleSelection(MapSelection.POSTE_SECOURS)}
              />
              <ellipse
                className={`cls-16 clickable selectable ${getSelectionStatus(MapSelection.SCENE)}`}
                cx="1121.79"
                cy="495.52"
                rx="29.74"
                ry="11.39"
                onClick={() => toggleSelection(MapSelection.SCENE)}
              />
              <circle
                className={`cls-17 clickable selectable ${getSelectionStatus(MapSelection.PHOTO)}`}
                cx="1374.07"
                cy="554.38"
                r="13.65"
                onClick={() => toggleSelection(MapSelection.PHOTO)}
              />
              <circle
                className={`cls-17 clickable selectable ${getSelectionStatus(MapSelection.SUMO)}`}
                cx="1374.07"
                cy="603.38"
                r="23.62"
                onClick={() => toggleSelection(MapSelection.SUMO)}
              />
              <circle
                className={`cls-18 clickable selectable ${getSelectionStatus(MapSelection.RECHARGEMENT)}`}
                cx="1121.79"
                cy="556.55"
                r="10.5"
                onClick={() => toggleSelection(MapSelection.RECHARGEMENT)}
              />
              <circle
                className={`cls-19 clickable selectable ${getSelectionStatus(MapSelection.SOFT_BAR)}`}
                cx="1374.07"
                cy="463.43"
                r="13.65"
                onClick={() => toggleSelection(MapSelection.SOFT_BAR)}
              />
              <rect
                className={`cls-19 clickable selectable ${getSelectionStatus(MapSelection.RESTAURANT)}`}
                x="1351.84"
                y="514.12"
                width="44.47"
                height="18.72"
                transform="translate(2748.14 1046.96) rotate(180)"
                onClick={() => toggleSelection(MapSelection.RESTAURANT)}
              />
              <line className="cls-19" x1="1144.35" y1="430.38" x2="1151.77" y2="430.5" />
              <polygon
                className="cls-19"
                points="1144.44 424.88 1151.77 430.5 1144.27 435.88 1144.44 424.88 1144.44 424.88"
              />
              <line className="cls-20" x1="1091.82" y1="430.3" x2="1144.35" y2="430.38" />
              <polyline className="cls-5" points="1149.87 466.75 1149.87 472.75 1143.87 472.75" />
              <line className="cls-28" x1="1129.15" y1="472.76" x2="1107.08" y2="472.76" />
              <polyline className="cls-5" points="1099.72 472.75 1093.72 472.75 1093.72 466.75" />
              <polyline className="cls-5" points="1093.72 459.53 1093.72 453.53 1099.72 453.53" />
              <line className="cls-28" x1="1114.44" y1="453.53" x2="1136.51" y2="453.53" />
              <polyline className="cls-5" points="1143.87 453.53 1149.87 453.53 1149.87 459.53" />
              {!!posX && !!posY && (
                <path
                  className="youhere"
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                  transform="translate(1110 575.64)"
                />
              )}
              <text className="cls-29" transform="translate(1160.4 435.64)">
                <tspan>Accès Pompier</tspan>
                <tspan x="0" y="31.2">
                  Barriérage
                </tspan>
                <tspan x="0" y="62.4">
                  Scènes
                </tspan>
                <tspan className="cls-31" x="0" y="93.6">
                  Postes de secours
                </tspan>
                <tspan className="cls-34" x="0" y="124.8">
                  Rechargement
                </tspan>
                {!!posX && !!posY && (
                  <tspan className="cls-34" x="0" y="156">
                    Tu n'es pas loin d'ici
                  </tspan>
                )}
              </text>
              <text className="cls-29" transform="translate(1406.4 436.64)">
                <tspan>Bar / EAT</tspan>
                <tspan x="0" y="31.2">
                  Bar à Soft
                </tspan>
                <tspan className="cls-31" x="0" y="62.4">
                  Pot VIP / Bar
                </tspan>
                <tspan className="cls-34" x="0" y="93.6">
                  Restauration
                </tspan>
                <tspan x="0" y="124.8">
                  Stand Photo
                </tspan>
                <tspan x="0" y="171.6">
                  Animation Sumo
                </tspan>
              </text>
              <rect
                className={`cls-22 clickable selectable ${getSelectionStatus(MapSelection.EAT)}`}
                x="1362.53"
                y="475.69"
                width="23.46"
                height="39.16"
                transform="translate(1869.53 -878.98) rotate(90)"
                onClick={() => toggleSelection(MapSelection.EAT)}
              />
            </g>
            <image className="logo" width="1756" height="578" href={mapLogo} />
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
