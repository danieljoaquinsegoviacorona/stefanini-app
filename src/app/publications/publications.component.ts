import { Component, OnInit, AfterViewChecked, ViewChild } from '@angular/core';
import { PageEvent, MatPaginator} from '@angular/material/paginator';
import { Sort, MatSort, MatSortable} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Publication } from '../../shared/publication/publication';
import { PublicationService } from '../../shared/publication/publication.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements  OnInit, AfterViewChecked {
  publications: Array<Publication> = [];
  paged: Array<Publication> = [];
  authors: Array<string> = [];
  dataSource: MatTableDataSource<Publication>;
  pageSize = 10;
  displayedColumns = ['id', 'title', 'author', 'published', 'description'];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(public publicationService: PublicationService) { }

  ngOnInit() {
    this.publicationService.GetPublications().subscribe((data: any) => {
      this.publications = data;
      this.dataSource = new MatTableDataSource(this.publications);
      this.dataSource.paginator = this.paginator;
      this.sort.sort(({ id: 'published', start: 'asc'}) as MatSortable);
      this.dataSource.sort = this.sort;
      this.dataSource.connect().subscribe(d => this.paged = d);
      this.refreshAuthors();
    });
  }

  ngAfterViewChecked() {
    this.refreshAuthors();
  }

  updateAuthors() {
    this.refreshAuthors();
  }

  refreshAuthors() {
    this.authors = [];
    this.paged.forEach(element => {
      this.authors.push(element.author);
    });
  }
}
