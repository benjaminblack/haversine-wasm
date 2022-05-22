#include <math.h>

#define R 6371008.8
#define TO_RAD (3.1415926536 / 180)

double haversine(double th1, double ph1, double th2, double ph2) {
  double dLat = (ph2 - ph1) * TO_RAD;
  double dLon = (th2 - th1) * TO_RAD;
  double lat1 = ph1 * TO_RAD;
  double lat2 = ph2 * TO_RAD;

  double a = pow(sin(dLat / 2.0), 2) + pow(sin(dLon / 2.0), 2) * cos(lat1) * cos(lat2);

  return R * 2 * atan2(sqrt(a), sqrt(1 - a));
}
