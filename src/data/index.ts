/*

  _                      _               
 | |                    | |              
 | |__  _   _ _ __   ___| |__   ___  ___ 
 | '_ \| | | | '_ \ / __| '_ \ / _ \/ __|
 | | | | |_| | | | | (__| | | | (_) \__ \
 |_| |_|\__,_|_| |_|\___|_| |_|\___/|___/
                                         
                                         
 */
import { Twitt } from '../components/twitt';
import { NotificationTwitt } from '../components/notificationTwitt';

type TwittProps = React.ComponentProps<typeof Twitt>;

export const twitts: Omit<TwittProps, 'onPress'>[] = [
  {
    id: 1,
    name: '🚀 JuanMeister',
    handle: '@juanmeister420',
    date: '1h',
    content:
      '🔥 Pierwszy tweet!',
    image: 'https://pbs.twimg.com/media/EOUrCOcWAAA71rA?format=png&name=small',
    avatar:
      'https://pbs.twimg.com/profile_images/1242807739681845248/HeUb7BA_400x400.jpg',
    comments: 1,
    retweets: 3,
    hearts: 12,
  },
];
