[Home](./index) &gt; [eth-connect](./eth-connect.md) &gt; [RequestManager](./eth-connect.requestmanager.md) &gt; [shh\_uninstallFilter](./eth-connect.requestmanager.shh_uninstallfilter.md)

# RequestManager.shh\_uninstallFilter property

Uninstalls a filter with given id. Should always be called when watch is no longer needed. Additonally Filters timeout when they aren't requested with shh\_getFilterChanges for a period of time.

**Signature:**
```javascript
shh_uninstallFilter: (filterId: Data) => Promise<boolean>
```