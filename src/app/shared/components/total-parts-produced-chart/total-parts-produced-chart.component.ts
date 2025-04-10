import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-total-parts-produced-chart',
  standalone: true,
  templateUrl: './total-parts-produced-chart.component.html',
  styleUrls: ['./total-parts-produced-chart.component.scss'],
})
export class TotalPartsProducedChartComponent
  implements AfterViewInit, OnChanges
{
  @Input() data: { timestamp: Date; totalProduced: number }[] = [];
  @ViewChild('chartContainer', { static: true }) chartContainer!: ElementRef;

  private svg: any;
  private width = 600;
  private height = 300;

  ngAfterViewInit(): void {
    this.initChart();
    this.updateChart();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && this.svg) {
      console.log('Data changed:', this.data);
      this.updateChart();
    }
  }

  initChart(): void {
    this.svg = d3
      .select(this.chartContainer.nativeElement)
      .append('svg')
      .attr('width', this.width)
      .attr('height', this.height);
  }

  updateChart(): void {
    if (!this.svg) {
      this.initChart();
    }
    this.svg.selectAll('*').remove();
    const margin = { top: 20, right: 30, bottom: 30, left: 50 };
    const width = this.width - margin.left - margin.right;
    const height = this.height - margin.top - margin.bottom;
    const g = this.svg
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const x = d3
      .scaleTime()
      .domain(d3.extent(this.data, (d) => d.timestamp) as [Date, Date])
      .range([0, width]);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(this.data, (d) => d.totalProduced)! * 1.1])
      .range([height, 0]);

    const line = d3
      .line<{ timestamp: Date; totalProduced: number }>()
      .x((d) => x(d.timestamp))
      .y((d) => y(d.totalProduced));

    g.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(
        d3
          .axisBottom(x)
          .ticks(5)
          .tickFormat(d3.timeFormat('%H:%M:%S') as any)
      );

    g.append('g').call(d3.axisLeft(y));

    g.append('path')
      .datum(this.data)
      .attr('fill', 'none')
      .attr('stroke', '#388e3c')
      .attr('stroke-width', 2)
      .attr('d', line);

    g.append('text')
      .attr('x', width / 2)
      .attr('y', -5)
      .attr('text-anchor', 'middle')
      .style('font-size', '16px')
      .style('font-weight', 'bold')
      .text('Total Parts Produced');
  }
}
