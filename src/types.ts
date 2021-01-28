/*

  _                      _               
 | |                    | |              
 | |__  _   _ _ __   ___| |__   ___  ___ 
 | '_ \| | | | '_ \ / __| '_ \ / _ \/ __|
 | | | | |_| | | | | (__| | | | (_) \__ \
 |_| |_|\__,_|_| |_|\___|_| |_|\___/|___/
                                         
                                         
 */
export type StackNavigatorParamlist = {
  FeedList: undefined;
  Details: {
    id: number;
    name: string;
    handle: string;
    date: string;
    content: string;
    image: string;
    avatar: string;
    comments: number;
    retweets: number;
    hearts: number;
  };
};
