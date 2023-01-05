import React from 'react';
import {AuthProvider } from './auth/AuthContext';
import {AppRouter} from './router/AppRouter'; 
import moment from 'moment';
import 'moment/locale/es';

moment.locale('es');
export const ChatApp = () => {
    return (
        <div>
                <AuthProvider>
                        <AppRouter/>
                </AuthProvider>
        </div>
    )
}
