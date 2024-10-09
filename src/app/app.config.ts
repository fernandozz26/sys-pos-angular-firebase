import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({"projectId":"lista-employ","appId":"1:667498618918:web:343503a9ec67db374106e7","databaseURL":"https://lista-employ-default-rtdb.firebaseio.com","storageBucket":"lista-employ.appspot.com","apiKey":"AIzaSyAW1EFbebGWyuLpZ8HJruXti5XEnpRjq24","authDomain":"lista-employ.firebaseapp.com","messagingSenderId":"667498618918","measurementId":"G-2D54MZ8DFW"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
