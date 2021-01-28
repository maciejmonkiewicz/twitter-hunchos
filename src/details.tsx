/*

  _                      _               
 | |                    | |              
 | |__  _   _ _ __   ___| |__   ___  ___ 
 | '_ \| | | | '_ \ / __| '_ \ / _ \/ __|
 | | | | |_| | | | | (__| | | | (_) \__ \
 |_| |_|\__,_|_| |_|\___|_| |_|\___/|___/
                                         
                                         
 */
import React from 'react';
import { RouteProp } from '@react-navigation/native';

import { DetailedTwitt } from './components/detailedTwitt';
import { StackNavigatorParamlist } from './types';

type Props = {
  route: RouteProp<StackNavigatorParamlist, 'Details'>;
};

export const Details = (props: Props) => {
  return <DetailedTwitt {...props.route.params} />;
};
