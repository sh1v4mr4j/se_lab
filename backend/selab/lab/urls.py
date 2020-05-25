from rest_framework import routers
from .api import schoolViewSet
from .api import studentViewSet

router = routers.DefaultRouter()
router.register('api/school',schoolViewSet,'school')
router.register('api/student',studentViewSet,'student')

urlpatterns = router.urls