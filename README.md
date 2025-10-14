# meteor-suspense-tracker-bug

This is a fresh meteor app created with `meteor create suspense-tracker-bug --react`

The issue is that putting multiple suspense trackers in a single component results in really slow loading times.
The amount of trackers needed to achieve this seem to vary. On larger production apps about 4-5 were enough.
In this example, anything above 10 is enough to slow the loader to more than a few seconds. Each one added afterwards makes things exponentially worse. 14 amounts to around 1 minute of loading.