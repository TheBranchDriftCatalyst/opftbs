from prometheus_client import CollectorRegistry, Gauge, Counter, push_to_gateway


class Metrics:
    def __init__(self, pushgateway_url, job_name):
        self.registry = CollectorRegistry()
        self.pushgateway_url = pushgateway_url
        self.job_name = job_name

    def gauge(self, name, value, labels=None):
        g = Gauge(
            name,
            f"Gauge metric: {name}",
            labelnames=labels.keys() if labels else [],
            registry=self.registry,
        )
        if labels:
            g.labels(**labels).set(value)
        else:
            g.set(value)
        self._push_metrics()

    def counter(self, name, labels=None):
        c = Counter(
            name,
            f"Counter metric: {name}",
            labelnames=labels.keys() if labels else [],
            registry=self.registry,
        )
        return (lambda: c.labels(**labels).inc()) if labels else (lambda: c.inc())

    def _push_metrics(self):
        push_to_gateway(self.pushgateway_url, job=self.job_name, registry=self.registry)
