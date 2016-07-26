//
//  CalendarManager.m
//  AwesomeProject
//
//  Created by zhangyili on 16/7/26.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "CalendarManager.h"

@implementation CalendarManager

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location)
{
  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
  RCTLogInfo(@"not connected");
}

@end
